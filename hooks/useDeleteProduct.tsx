import AxiosInstance from "@/constants/AxiosInstance";
import { useMutation } from "@tanstack/react-query";

const fetchDeleteProduct = async (productId: string): Promise<any> => {
  try {
    const res = await AxiosInstance.delete(`/product/${productId}`);

    return res;
  } catch (error) {
    return error;
  }
};

export const useDeleteProduct = () => {
  return useMutation({
    mutationFn: fetchDeleteProduct,
  });
};
