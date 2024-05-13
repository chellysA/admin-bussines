import axios from "axios";
import { enviroments } from "./enviroments";

const AxiosInstance = axios.create({
  baseURL: enviroments.BASE_URL,
});

// Add a response interceptor
AxiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error.response.data);
  },
);

export default AxiosInstance;
