import AxiosInstance from "@/constants/AxiosInstance";
import { IResponseServices } from "@/types/request";
import { useMutation } from "@tanstack/react-query";

export interface IPayLoadCreateBusines {
  name: string;
  documentType: "ve" | "e" | "rif";
  documentNumber: string;
  phone: string;
  address: string | null;
  enterpriseId: string;
  representativeName: string;
}

const fetchCreateBusiness = async (
  payload: IPayLoadCreateBusines,
): Promise<IResponseServices<any>> => {
  const res = await AxiosInstance.post("/business/create", { ...payload });

  try {
    // TODO Mejorar el typescript
    return res;
  } catch (error) {
    return error;
  }
};

export const useCreateBusiness = () => {
  return useMutation({
    mutationFn: fetchCreateBusiness,
  });
};
