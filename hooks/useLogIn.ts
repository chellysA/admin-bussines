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
  const res = await AxiosInstance.post("/auth/login", payload);

  try {
    // TODO Mejorar el typescript
    return res;
  } catch (error) {
    return error;
  }
};

export const useLogIn = () => {
  return useMutation({
    mutationFn: fetchLogIn,
  });
};
