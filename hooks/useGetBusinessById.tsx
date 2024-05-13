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
  representativeName: string;
}

const fetchGetBusinessById = async (
  businessId: string,
): Promise<IResponseServices<IBusiness>> => {
  const res = await AxiosInstance.get<IResponseServices<IBusiness>>(
    `/business/${businessId}`,
  );

  try {
    // TODO Mejorar el typescript

    return res.data;
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
