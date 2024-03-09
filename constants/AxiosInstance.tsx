import axios from "axios";
import { enviroments } from "./enviroments";

const AxiosInstance = axios.create({
  baseURL: enviroments.BASE_URL,
});

export default AxiosInstance;
