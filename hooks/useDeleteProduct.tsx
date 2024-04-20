import AxiosInstance from "@/constants/AxiosInstance";
import { useMutation } from "@tanstack/react-query";

const fetchDeleteProduct = async (): Promise<any> => {
  try {
    const res = await AxiosInstance.delete(`/product/660d87f5fdfac837e6246c0f`);

    return res.data;
  } catch (error) {
    return error;
  }
};

export const useDeleteProduct = () => {
  return useMutation({
    mutationFn: fetchDeleteProduct,
  });
};
