import { api } from "./api";
import { LoginProps, LoginResponse } from "../types/auth";

export const login = async ({ email, password }: LoginProps) => {
  const response = await api.post<LoginResponse>("/auth/login", {
    email,
    password,
  });
  return response.data;
};

export const refreshToken = async (refreshToken: string) => {
  const response = await api.post<LoginResponse>(
    "/auth/sessions/refresh-token",
    {
      refreshToken,
    }
  );
  return response.data;
};
