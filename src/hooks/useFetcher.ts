import axios from "axios";

export const useFetcher = () => {
  const fetcher = async (
    host: string,
    path: string,
    accessToken: string,
    queryParameters?: URLSearchParams
  ): Promise<any> => {
    const apiClient = axios.create({
      baseURL: host,
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      responseType: "json",
    });

    const response = await apiClient(path, {
      params: queryParameters,
    });

    console.log(response);

    if (response.statusText) {
      const errorResponse = await response.data;
      const error = new Error(
        errorResponse.messsage ?? "APIリクエスト中にエラーが発生しました"
      );
      throw error;
    }
    return response.data;
  };

  return {
    fetcher,
  };
};
