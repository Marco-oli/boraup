import { api } from "./api";
import { UserResponse } from "../types/user";

export const getUserInfo = async () => {
  const response = await api.get<UserResponse>("/users/me");
  return response.data;
};
