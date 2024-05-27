import AxiosInstance from "@/constants/AxiosInstance";
import { IResponseServices } from "@/types/request";
import { useMutation } from "@tanstack/react-query";

export interface IPayLoadCreateCategory {
  businessId: string;
  name: string;
}

const fetchCreateCategory = async (
  payload: IPayLoadCreateCategory,
): Promise<IResponseServices<any>> => {
  try {
    const res = await AxiosInstance.post<IResponseServices<any>>(
      "/category/create",
      {
        ...payload,
        businessId: "660d87f5fdfac837e6246c0f",
      },
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const useCreateCategory = () => {
  return useMutation({
    mutationFn: fetchCreateCategory,
  });
};
