// lib/axios.ts
import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL:'/api',
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach token from cookie
api.interceptors.request.use((config) => {
  const token = Cookies.get("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
