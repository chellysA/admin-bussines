import AxiosInstance from "@/constants/AxiosInstance";
import { useMutation } from "@tanstack/react-query";

const fetchUpdateEnterprise = async (params: {
  enterpriseId: string;
  updatedData: any;
}): Promise<any> => {
  try {
    const res = await AxiosInstance.put(
      `/enterprise/${params.enterpriseId}`,
      params.updatedData,
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const useUpdateEnterprise = () => {
  return useMutation({
    mutationFn: fetchUpdateEnterprise,
  });
};
