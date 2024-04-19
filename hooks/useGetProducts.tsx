import AxiosInstance from "@/constants/AxiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetchGetProducts = async (): Promise<any[]> => {
  try {
    const res = await AxiosInstance.get("/product");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["business"],
    queryFn: fetchGetProducts,
  });
};
