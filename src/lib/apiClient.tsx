import axios, { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { error } from "types";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8080",
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
});

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError<error>) => {
    const router = useRouter();
    // TODO recoilでエラー管理する？
    console.log(error.response?.data.errorCode);
    switch (error.response?.status) {
      case 404:
        router.push("/404");
        break;
      case 500:
        router.push("/error");
        break;
      default:
        router.push("/error");
        break;
    }
    return Promise.reject(error);
  }
);
export default apiClient;
