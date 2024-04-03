import AxiosInstance from "@/constants/AxiosInstance";
import { useMutation } from "@tanstack/react-query";

const fetchUpdateBusiness = async (params: {
  businessId: string;
  updatedData: any;
}): Promise<any> => {
  try {
    const res = await AxiosInstance.put(
      `/business/${params.businessId}`,
      params.updatedData,
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const useUpdateBusiness = () => {
  return useMutation({
    mutationFn: fetchUpdateBusiness,
  });
};
