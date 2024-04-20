import AxiosInstance from "@/constants/AxiosInstance";
import { IResponseServices } from "@/types/request";
import { useQuery } from "@tanstack/react-query";

interface IProducts {
  _id: string;
  name: string;
  presentation: string;
  price: string;
  with_iva: boolean;
}

const fetchGetProductById = async (
  productId: string,
): Promise<IResponseServices<IProducts>> => {
  try {
    const res = await AxiosInstance.get<IResponseServices<IProducts>>(
      `/product/${productId}`,
    );

    return res.data;
  } catch (error) {
    // @ts-ignore
    throw error;
  }
};

export const useGetProductById = (productId: string) => {
  return useQuery({
    queryKey: ["productById"],
    queryFn: () => fetchGetProductById(productId),
    enabled: !!productId,
  });
};
