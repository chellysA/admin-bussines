import AxiosInstance from "@/constants/AxiosInstance";
import { IResponseServices } from "@/types/request";
import { useMutation } from "@tanstack/react-query";

export interface IPayLoadLogIn {
  email: string;
  password: string;
}

const fetchLogIn = async (
  payload: IPayLoadLogIn,
): Promise<IResponseServices<any>> => {
  try {
    const res = await AxiosInstance.post("/auth/login", payload);
    return res;
  } catch (error) {
    throw error;
  }
};

export const useLogIn = () => {
  return useMutation({
    mutationFn: fetchLogIn,
  });
};
