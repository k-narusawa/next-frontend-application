import axios, { AxiosError, AxiosResponse } from "axios";
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
    // TODO recoilでエラー管理する？
    switch (error.response?.data.errorCode) {
      case "UN_AUTHORIZED":
        console.log("認証エラー");
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);
export default apiClient;
