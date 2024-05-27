import AxiosInstance from "@/constants/AxiosInstance";
import { IResponseServices } from "@/types/request";
import { useMutation } from "@tanstack/react-query";

export interface IPayLoadCreateProduct {
  businessId: string;
  categoryId: string;
  name: string;
  presentation: string;
  price: string;
  with_iva: boolean;
}

const fetchCreateProduct = async (
  payload: IPayLoadCreateProduct,
): Promise<IResponseServices<any>> => {
  try {
    const res = await AxiosInstance.post("/product/create", {
      ...payload,
      businessId: "660d87f5fdfac837e6246c0f",
    });

    return res;
  } catch (error) {
    throw error;
  }
};

export const useCreateProduct = () => {
  return useMutation({
    mutationFn: fetchCreateProduct,
  });
};
