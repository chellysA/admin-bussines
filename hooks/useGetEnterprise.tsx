import AxiosInstance from "@/constants/AxiosInstance";
import { IResponseServices } from "@/types/request";
import { useQuery } from "@tanstack/react-query";

const fetchGetEnterprise = async (): Promise<any[]> => {
  const res = await AxiosInstance.get("/enterprise");

  try {
    // TODO Mejorar el typescript

    return res.data;
  } catch (error) {
    return error;
  }
};

export const useGetEnterprise = () => {
  return useQuery({
    queryKey: ["enterprise"],
    queryFn: fetchGetEnterprise,
  });
};
