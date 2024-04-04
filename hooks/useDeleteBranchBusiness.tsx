import AxiosInstance from "@/constants/AxiosInstance";
import { useMutation } from "@tanstack/react-query";

const fetchDeleteBranchBusiness = async (
  branchBusinessId: string,
): Promise<any> => {
  try {
    const res = await AxiosInstance.delete(
      `/branchBusiness/${branchBusinessId}`,
    );
    // TODO Mejorar el typescript

    return res;
  } catch (error) {
    throw error;
  }
};

export const useDeleteBranchBusiness = () => {
  return useMutation({
    mutationFn: fetchDeleteBranchBusiness,
  });
};
