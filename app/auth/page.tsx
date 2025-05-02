"use client";

import React, { useEffect } from "react";
import { myAppHook } from "@/context/AppProvider";
import { useRouter } from "next/navigation";

interface formData {
  name?: string;
  email: string;
  password: string;
  address: string;
  year: number;
}

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = React.useState<boolean>(true);
  const [formData, setFormData] = React.useState<formData>({
    name: "",
    email: "",
    password: "",
    address: "",
    year: 1,
  })

  const { login, register, authToken, isloading } = myAppHook();
  const router = useRouter();

  useEffect(() => {
    if(authToken){
      router.push("/dashboard");
      return;
    }
  }, [authToken, isloading])

  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(isLogin){
      try{
        await login(formData.email, formData.password);
      }catch(error){
        console.log(`Auth error: ${error}`)
      }
    }else{
      try{
        await register( formData.name!, formData.email, formData.password, formData.address, formData.year);
      }
      catch(error){
        console.log(`Auth error: ${error}`)
      }
    }
  }

  return<>
    <div className="container-fluid bg-light min-vh-100 d-flex justify-content-center align-items-center py-5" 
         style={{background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"}}>
      <div className="row justify-content-center w-100">
        <div className="col-md-6 col-lg-4">
          <div className="card border-0 shadow-lg rounded-3 overflow-hidden">
            <div className="card-header bg-primary text-white text-center p-4 border-0">
              <h3 className="mb-0 fw-bold">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h3>
            </div>
            
            <div className="card-body p-4 p-lg-5">
              {!isLogin && (
                <div className="text-center mb-4 text-muted">
                  <p>Join us to start managing your products</p>
                </div>
              )}
              
              <form onSubmit={handleFormSubmit}>
                {!isLogin && (
                  <div className="mb-2">
                    <label className="form-label fw-bold text-muted small">FULL NAME</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <i className="bi bi-person-fill text-primary"></i>
                      </span>
                      <input 
                        className="form-control bg-light border-start-0"
                        name="name"
                        type="text"
                        value={formData.name}
                        placeholder="Enter your name"
                        onChange={handleOnChangeInput}
                        required
                      />
                    </div>
                  </div>
                )}
                
                <div className="mb-2">
                  <label className="form-label fw-bold text-muted small">EMAIL ADDRESS</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      <i className="bi bi-envelope-fill text-primary"></i>
                    </span>
                    <input
                      className="form-control bg-light border-start-0"
                      name="email" 
                      type="email"
                      value={formData.email}
                      placeholder="Enter your email"
                      onChange={handleOnChangeInput}
                      required
                    />
                  </div>
                </div>

                {!isLogin && (
                  <div className="mb-3">
                    <label className="form-label fw-bold text-muted small">Year</label>
                    <select 
                        className="form-select border-end-0" 
                        name="year" 
                        value={formData.year}
                        onChange={ handleOnChangeInput }
                        required
                    >
                        <option value="1">Year 1</option>
                        <option value="2">Year 2</option>
                        <option value="3">Year 3</option>
                        <option value="3">Year 4</option>
                    </select>
                </div>
                )}

                {!isLogin && (
                  <div className="mb-2">
                    <label className="form-label fw-bold text-muted small">Address</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <i className="bi bi-shield-lock-fill text-primary"></i>
                      </span>
                      <input
                        className="form-control bg-light border-start-0"
                        name="address"
                        type="text"
                        value={formData.address}
                        placeholder="Enter your address"
                        onChange={handleOnChangeInput}
                        required
                      />
                    </div>
                  </div>
                )}
                
                <div className="mb-3">
                  <label className="form-label fw-bold text-muted small">PASSWORD</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      <i className="bi bi-lock-fill text-primary"></i>
                    </span>
                    <input
                      className="form-control bg-light border-start-0"
                      name="password"
                      type="password" 
                      value={formData.password}
                      placeholder="Enter your password"
                      onChange={handleOnChangeInput}
                      required
                    />
                  </div>
                </div>
                
                <div className="d-grid gap-2 mt-5">
                  <button className="btn btn-primary btn-lg py-3 fw-bold shadow-sm" type="submit">
                    {isLogin ? "Sign In" : "Create Account"} 
                    <i className="bi bi-arrow-right-circle ms-2"></i>
                  </button>
                </div>
              </form>
              
              <div className="text-center mt-3">
                <p className="mb-0 text-muted">
                  {isLogin ? "Don't have an account?" : "Already have an account?"} 
                  <span 
                    className="ms-1 fw-bold text-primary" 
                    style={{ cursor: 'pointer' }} 
                    onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "Sign Up" : "Sign In"}
                  </span>
                </p>
              </div>
              <div className="card-footer bg-white text-center border-0">
                <div className="small text-muted">
                  <i className="bi bi-shield-check me-1"></i>
                  Your data is securely encrypted
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Auth;