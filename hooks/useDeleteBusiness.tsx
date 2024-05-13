import AxiosInstance from "@/constants/AxiosInstance";
import { useMutation, useQuery } from "@tanstack/react-query";

const fetchDeleteBusiness = async (businessId: string): Promise<any> => {
  const res = await AxiosInstance.delete(`/business/${businessId}`);

  try {
    // TODO Mejorar el typescript

    return res;
  } catch (error) {
    return error;
  }
};

export const useDeleteBusiness = () => {
  return useMutation({
    mutationFn: fetchDeleteBusiness,
  });
};
