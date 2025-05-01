"use client";

import Loader from "@/components/Loader";
import React, { createContext, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface AppProviderType {
    isloading: boolean;
    authToken: string | null;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string, password_confirmation: string) => Promise<void>;
    logout: () => void;
}

const AppContext = createContext<AppProviderType|undefined>(undefined);

const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}`;

export const AppProvider = ({
children,
}:{children: React.ReactNode;}) => {

    const [ isloading, setIsLoading ] = React.useState<boolean>(true);
    const [ authToken, setAuthToken ] = React.useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get("authToken");
        if(token){
            setAuthToken(token);
        }else{
            router.push("/auth");
        }
        setIsLoading(false);
    })

    const login = async (email: string, password: string) => {
        setIsLoading(true);
        try{
            const response = await axios.post(`${API_URL}/login`, {
                email,
                password,
            })

            if(response.data.status){
                Cookies.set("authToken", response.data.token, { expires: 7 });
                toast.success("Login successful!");
                setAuthToken(response.data.token);
                router.push("/dashboard");
            }else{
                toast.error("Login failed!");
            }

            console.log(response);
        }
        catch(error){
            console.log(`Login error: ${error}`)
        }
        finally{
            setIsLoading(false);
        }
    }

    const register = async (name: string, email: string, password: string, password_confirmation: string) => {
        setIsLoading(true);
        try{
            const response = await axios.post(`${API_URL}/register`, {
                name,
                email,
                password,
                password_confirmation,
            })
            console.log(response);
        }
        catch(error){
            console.log(`Register error: ${error}`)
        }
        finally{
            setIsLoading(false);
        }
    }

    const logout = () => {
        setAuthToken(null);
        Cookies.remove("authToken");
        setIsLoading(false);
        toast.success("Logout successful!");
        router.push("/auth");
    }

    return(
        <AppContext.Provider value={{login, register, isloading, authToken, logout}}>
            { isloading? <Loader/>: children }
        </AppContext.Provider>
    )

}

export const myAppHook = () => {
    const context = useContext(AppContext);

    if(!context){
        throw new Error("myAppHook must be used within an AppProvider");
    }
    return context;
}