import AxiosInstance from "@/constants/AxiosInstance";
import { useMutation } from "@tanstack/react-query";

const fetchDeleteBusiness = async (businessId: string): Promise<any> => {
  try {
    const res = await AxiosInstance.delete(`/business/${businessId}`);
    // TODO Mejorar el typescript

    return res;
  } catch (error) {
    throw error;
  }
};

export const useDeleteBusiness = () => {
  return useMutation({
    mutationFn: fetchDeleteBusiness,
  });
};
