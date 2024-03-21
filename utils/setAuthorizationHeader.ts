import AxiosInstance from "@/constants/AxiosInstance";

export const setAuthorizationHeader = (token: string) =>
  (AxiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`);
