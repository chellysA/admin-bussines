import AxiosInstance from "@/constants/AxiosInstance";
import { useMutation, useQuery } from "@tanstack/react-query";

const fetchDeleteEnterprise = async (enterpriseId: string): Promise<any> => {
  try {
    const res = await AxiosInstance.delete(`/enterprise/${enterpriseId}`);
    // TODO Mejorar el typescript

    return res;
  } catch (error) {
    throw error;
  }
};

export const useDeleteEnterprise = () => {
  return useMutation({
    mutationFn: fetchDeleteEnterprise,
  });
};
