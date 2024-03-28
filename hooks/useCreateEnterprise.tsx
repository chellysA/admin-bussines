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
): Promise<IResponseServices<any>> => {
  const res = await AxiosInstance.post("/enterprise/create", payload);

  try {
    // TODO Mejorar el typescript
    return res;
  } catch (error) {
    return error;
  }
};

export const useCreateEnterprise = () => {
  return useMutation({
    mutationFn: fetchCreateEnterprise,
  });
};
