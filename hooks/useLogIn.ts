import AxiosInstance from "@/constants/AxiosInstance";
import { useMutation } from "@tanstack/react-query";

interface IPayLoadLogIn {
  email: string;
  password: string;
}

const fetchLogIn = async (payload: IPayLoadLogIn) => {
  const res = await AxiosInstance.post("/auth/login", payload);
  try {
    console.log("Respuesta del servidor:", res);
    return res;
  } catch (error) {
    console.error("Error al enviar datos:", error);
    return error;
  }
};

export const useLogIn = () => {
  return useMutation({
    mutationFn: fetchLogIn,
  });
};
