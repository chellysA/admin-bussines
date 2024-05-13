import AxiosInstance from "@/constants/AxiosInstance";
import { useMutation } from "@tanstack/react-query";

const fetchUpdateBranchBusiness = async (params: {
  branchBusinessId: string;
  updatedData: any;
}): Promise<any> => {
  try {
    const res = await AxiosInstance.put(
      `/branchBusiness/${params.branchBusinessId}`,
      params.updatedData,
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const useUpdateBranchBusiness = () => {
  return useMutation({
    mutationFn: fetchUpdateBranchBusiness,
  });
};
