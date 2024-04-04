import AxiosInstance from "@/constants/AxiosInstance";
import { IResponseServices } from "@/types/request";
import { useQuery } from "@tanstack/react-query";

interface IBranchBusiness {
  _id: string;
  name: string;
  phone: string;
  address: string;
}

const fetchGetBranchBusinessById = async (
  branchBusinessId: string,
): Promise<IResponseServices<IBranchBusiness>> => {
  try {
    // TODO Mejorar el typescript
    const res = await AxiosInstance.get<IResponseServices<IBranchBusiness>>(
      `/business/${branchBusinessId}`,
    );
    return res.data;
  } catch (error) {
    // @ts-ignore
    throw error;
  }
};

export const useGetBranchBusinessById = (branchBusinessId: string) => {
  return useQuery({
    queryKey: ["branchBusinessById"],
    queryFn: () => fetchGetBranchBusinessById(branchBusinessId),
    enabled: !!branchBusinessId,
  });
};
