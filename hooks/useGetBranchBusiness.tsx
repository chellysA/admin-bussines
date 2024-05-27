import AxiosInstance from "@/constants/AxiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetchGetBranchBusiness = async (): Promise<any[]> => {
  try {
    const res = await AxiosInstance.get("/branchBusiness");
    // TODO Mejorar el typescript

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const useGetBranchBusiness = () => {
  return useQuery({
    queryKey: ["branchBusiness"],
    queryFn: fetchGetBranchBusiness,
  });
};
