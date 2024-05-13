import AxiosInstance from "@/constants/AxiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetchGetBusiness = async (): Promise<any[]> => {
  const res = await AxiosInstance.get("/business");

  try {
    // TODO Mejorar el typescript

    return res.data;
  } catch (error) {
    return error;
  }
};

export const useGetBusiness = () => {
  return useQuery({
    queryKey: ["business"],
    queryFn: fetchGetBusiness,
  });
};
