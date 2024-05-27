import AxiosInstance from "@/constants/AxiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetchGetCategory = async (): Promise<any[]> => {
  try {
    const res = await AxiosInstance.get("/category/660d87f5fdfac837e6246c0f");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const useGetCategory = () => {
  return useQuery({
    queryKey: ["enterprise"],
    queryFn: fetchGetCategory,
  });
};
