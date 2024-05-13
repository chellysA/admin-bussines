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
  const res = await AxiosInstance.get<IResponseServices<IEnterprises>>(
    `/enterprise/${enterpriseId}`,
  );

  try {
    // TODO Mejorar el typescript

    return res.data;
  } catch (error) {
    // @ts-ignore
    return error;
  }
};

export const useGetEnterpriseById = (enterpriseId: string) => {
  return useQuery({
    queryKey: ["enterpriseById"],
    queryFn: () => fetchGetEnterpriseById(enterpriseId),
    enabled: !!enterpriseId,
  });
};
