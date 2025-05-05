// lib/axios.ts
import axios from "axios";
import Cookies from "js-cookie";
import https from "https";

const agent = new https.Agent({
    rejectUnauthorized: false, // Disable certificate validation
  });

const api = axios.create({
  baseURL:'/backend',
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
    httpsAgent: agent, // Use the custom agent for HTTPS requests
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
