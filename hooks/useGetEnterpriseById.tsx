import AxiosInstance from "@/constants/AxiosInstance";
import { IResponseServices } from "@/types/request";
import { useQuery } from "@tanstack/react-query";

interface IEnterprises {
  _id: string;
  name: string;
  documentType: string;
  email: string;
  documentNumber: string;
  phone: string;
  address: string;
  representativeName: string;
}

const fetchGetEnterpriseById = async (
  enterpriseId: string,
): Promise<IResponseServices<IEnterprises>> => {
  try {
    // TODO Mejorar el typescript
    const res = await AxiosInstance.get<IResponseServices<IEnterprises>>(
      `/enterprise/${enterpriseId}`,
    );
    return res.data;
  } catch (error) {
    // @ts-ignore
    throw error;
  }
};

export const useGetEnterpriseById = (enterpriseId: string) => {
  return useQuery({
    queryKey: ["enterpriseById"],
    queryFn: () => fetchGetEnterpriseById(enterpriseId),
    enabled: !!enterpriseId,
  });
};
