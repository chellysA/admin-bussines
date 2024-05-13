import AxiosInstance from "@/constants/AxiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetchGetBusiness = async (): Promise<any[]> => {
  try {
    const res = await AxiosInstance.get("/business");
    // TODO Mejorar el typescript

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const useGetBusiness = () => {
  return useQuery({
    queryKey: ["business"],
    queryFn: fetchGetBusiness,
  });
};
