import AxiosInstance from "@/constants/AxiosInstance";
import { IResponseServices } from "@/types/request";
import { useMutation } from "@tanstack/react-query";

export interface IPayLoadCreateBranchBusines {
  name: string;
  phone: string;
  address: string | null;
  businessId: string;
}

const fetchCreateBranchBusiness = async (
  payload: IPayLoadCreateBranchBusines,
): Promise<IResponseServices<any>> => {
  try {
    const { businessId, ...payloadWithoutBusinessId } = payload;
    const res = await AxiosInstance.post(
      `/branchBusiness/create/${payload.businessId}`,
      {
        ...payloadWithoutBusinessId,
      },
    );
    // TODO Mejorar el typescript
    return res;
  } catch (error) {
    throw error;
  }
};

export const useCreateBranchBusiness = () => {
  return useMutation({
    mutationFn: fetchCreateBranchBusiness,
  });
};
