import axios from "axios";
import { useAuthStore } from "../store/authStore";

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

api.interceptors.request.use((config) => {
  const { accessToken } = useAuthStore.getState();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { response, config } = error;
    const authStore = useAuthStore.getState();

    if (response?.status === 401 && authStore.refreshToken) {
      try {
        const { data } = await axios.post(
          `${process.env.EXPO_PUBLIC_API_URL}/auth/sessions/refresh-token`,
          { refreshToken: authStore.refreshToken }
        );

        authStore.setTokens(data.accessToken, data.refreshToken);

        config.headers.Authorization = `Bearer ${data.accessToken}`;
        console.log("new access token", data.accessToken);
        return api(config);
      } catch (err) {
        console.log("Refresh token expirado ou inválido", err);
        authStore.setTokens("", "");
      }
    }

    return Promise.reject(error);
  }
);
