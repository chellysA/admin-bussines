import AxiosInstance from "@/constants/AxiosInstance";
import { IResponseServices } from "@/types/request";
import { useMutation } from "@tanstack/react-query";

export interface IPayLoadCreateEnterprise {
  name: string;
  documentType: "ve" | "e" | "rif";
  documentNumber: string;
  email: string;
  phone: string;
  address: string | null;
  representativeName: string;
}

const fetchCreateEnterprise = async (
  payload: IPayLoadCreateEnterprise,
): Promise<IResponseServices<IPayLoadCreateEnterprise>> => {
  try {
    const res = await AxiosInstance.post("/enterprise/create", payload);
    // TODO Mejorar el typescriptc

    return res;
  } catch (error) {
    throw error;
  }
};

export const useCreateEnterprise = () => {
  return useMutation({
    mutationFn: fetchCreateEnterprise,
  });
};
