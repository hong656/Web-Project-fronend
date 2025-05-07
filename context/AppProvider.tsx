"use client";

import Loader from "@/components/Loader";
import React, { createContext, useContext, useEffect } from "react";
import api from "@/lib/axios";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { usePathname, useRouter } from "next/navigation";

interface AppProviderType {
    isloading: boolean;
    authToken: string | null;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string, address: string, year: number) => Promise<void>;
    logout: () => void;
}

const AppContext = createContext<AppProviderType|undefined>(undefined);


const publicRoutes = ["/", "/auth", "/about"];

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [isloading, setIsLoading] = React.useState<boolean>(true);
    const [authToken, setAuthToken] = React.useState<string | null>(null);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const token = Cookies.get("authToken");

        if (token) {
            setAuthToken(token);
        } else {
            const isPublic = publicRoutes.includes(pathname);
            if (!isPublic) {
                router.push("/auth");
            }
        }

        setIsLoading(false);
    }, [pathname]); // ⬅️ Re-run effect when route changes

    const login = async (email: string, password: string) => {
        setIsLoading(true);
        try {
            const response = await api.post("/login.php", {
                email,
                password,
            });
    
            if (response.data.status) {
                Cookies.set("authToken", response.data.token, { expires: 7 });
                toast.success("Login successful!");
                setAuthToken(response.data.token);
                router.push("/");
            } else {
                toast.error("Login failed!");
            }
        } catch (error) {
            console.log(`Login error: ${error}`);
            toast.error("An error occurred during login.");
        } finally {
            setIsLoading(false);
        }
    };
    
    const register = async (name: string, email: string, password: string, address: string, year: number) => {
        setIsLoading(true);
        try {
            const response = await api.post("/register.php", {
                name,
                address,
                email,
                password,
                year,
            });
            toast.success("Registration successful!");
            router.push("/auth");
        } catch (error) {
            console.log(`Register error: ${error}`);
            toast.error("An error occurred during registration.");
        } finally {
            setIsLoading(false);
        }
    };
    

    const logout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to logout of your account!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout!"
        }).then((result) => {
            if (result.isConfirmed) {
                setAuthToken(null);
                Cookies.remove("authToken");
                setIsLoading(false);
                toast.success("Logout successful!");
                Swal.fire({
                title: "Logout!",
                text: "Logout successful!",
                icon: "success"
                });
            }
        });
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