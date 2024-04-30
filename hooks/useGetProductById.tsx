import AxiosInstance from "@/constants/AxiosInstance";
import { IResponseServices } from "@/types/request";
import { useQuery } from "@tanstack/react-query";

interface IProducts {
  _id: string;
  name: string;
  presentation: string;
  price: string;
  with_iva: boolean;
  categoryId: string;
  businessId: string;
}

const fetchGetProductById = async (
  productsId: string,
): Promise<IResponseServices<IProducts>> => {
  try {
    const res = await AxiosInstance.get<IResponseServices<IProducts>>(
      `/product/${productsId}`,
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const useGetProductById = (productsId: string) => {
  return useQuery({
    queryKey: ["productById"],
    queryFn: () => fetchGetProductById(productsId),
    enabled: !!productsId,
  });
};
