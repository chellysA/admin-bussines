import AxiosInstance from "@/constants/AxiosInstance";
import { IResponseServices } from "@/types/request";
import { useQuery } from "@tanstack/react-query";

interface IBusiness {
  _id: string;
  name: string;
  documentType: string;
  documentNumber: string;
  phone: string;
  address: string;
  email: string;
  representativeName: string;
  enterpriseId: any;
}

const fetchGetBusinessById = async (
  businessId: string,
): Promise<IResponseServices<IBusiness>> => {
  const res = await AxiosInstance.get<IResponseServices<IBusiness>>(
    `/business/${businessId}`,
  );

  try {
    // TODO Mejorar el typescript

    return res;
  } catch (error) {
    // @ts-ignore
    return error;
  }
};

export const useGetBusinessById = (businessId: string) => {
  return useQuery({
    queryKey: ["businessById"],
    queryFn: () => fetchGetBusinessById(businessId),
    enabled: !!businessId,
  });
};
