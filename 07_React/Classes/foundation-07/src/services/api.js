import axios from "axios";
import { tokenStore } from "./tokenStore.js";
import { authService } from "./authService.js";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = tokenStore.getAccess();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if error is 401 and we haven't retried yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // 1. Send request to refresh token endpoint
        // Use a clean axios instance (or fetch) to avoid infinite loops
        const refreshToken = tokenStore.getRefresh();
        const { accessToken, refreshToken: newRefreshToken } =
          await authService.refreshToken(refreshToken);

        // 2. Set the data in local storage
        tokenStore.set({ accessToken, refreshToken });

        // 3. Update the header and retry the original request
        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // If refresh fails, logout user or redirect to login
        localStorage.clear();
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
