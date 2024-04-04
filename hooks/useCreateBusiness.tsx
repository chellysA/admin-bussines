import AxiosInstance from "@/constants/AxiosInstance";
import { IResponseServices } from "@/types/request";
import { useMutation } from "@tanstack/react-query";

export interface IPayLoadCreateBusines {
  name: string;
  documentType: "ve" | "e" | "rif";
  documentNumber: string;
  phone: string;
  address: string | null;
}

const fetchCreateBusiness = async (
  payload: IPayLoadCreateBusines,
): Promise<IResponseServices<any>> => {
  try {
    const res = await AxiosInstance.post("/business/create", {
      ...payload,
      enterpriseId: "6605f80c4a463e5e83f7d840",
    });
    // TODO Mejorar el typescript
    return res;
  } catch (error) {
    throw error;
  }
};

export const useCreateBusiness = () => {
  return useMutation({
    mutationFn: fetchCreateBusiness,
  });
};
