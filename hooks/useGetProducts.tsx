import AxiosInstance from "@/constants/AxiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetchGetProducts = async (): Promise<any[]> => {
  try {
    const res = await AxiosInstance.get("/product/660d87f5fdfac837e6246c0f");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchGetProducts,
  });
};
