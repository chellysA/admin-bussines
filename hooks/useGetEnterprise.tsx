import AxiosInstance from "@/constants/AxiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetchGetEnterprise = async (): Promise<any[]> => {
  try {
    const res = await AxiosInstance.get("/enterprise");
    // TODO Mejorar el typescript

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const useGetEnterprise = () => {
  return useQuery({
    queryKey: ["enterprise"],
    queryFn: fetchGetEnterprise,
  });
};
