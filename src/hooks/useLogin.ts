import axios, { AxiosError } from "axios";
import { apiClient } from "lib/apiClient";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loginSelector } from "states/selectors/loginSelector";
import { tokenSelector } from "states/selectors/tokenSelector";
import { error, token } from "types";

export const useLogin = () => {
  const setIsLogin = useSetRecoilState(loginSelector);
  const setToken = useSetRecoilState(tokenSelector);
  const isLogin = useRecoilValue(loginSelector);
  const token = useRecoilValue(tokenSelector);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const login = useCallback(async (loginId: string, password: string) => {
    const data = { loginId: loginId, password: password };
    setIsLoading(true);
    try {
      await apiClient.post<token>("/api/login", data).then((response) => {
        setIsLogin(true);
        setToken({
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken,
        });
        router.push("/");
      });
    } catch (e) {
      // TODO エラーハンドリング考え直す
      setIsLogin(false);
      if (
        (e as AxiosError<error>).response?.data.status &&
        (e as AxiosError<error>).response?.data.message &&
        (e as AxiosError<error>).response?.data.errorCode
      ) {
        // TODO ifのネスト読みにくすぎるのでeslintを書き直す
        if (e.response?.data.errorCode === "UN_AUTHORIZED") {
          setErrorMessage("認証に失敗しました！");
        } else if (e.response?.data.errorCode === "SERVER_ERROR") {
          setErrorMessage("サーバーエラーが発生しました！");
        } else {
          setErrorMessage("予期せぬエラーが発生しました！");
        }
      } else {
        setErrorMessage("予期せぬエラーが発生しました！");
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    const config = {
      // TODO headerの持たせ方を共通化させる
      headers: {
        Authorization: "Bearer " + token.accessToken,
      },
    };
    setIsLoading(true);
    try {
      await apiClient.post("/api/logout", undefined, config).then(() => {
        setIsLogin(true);
        setToken({
          accessToken: "",
          refreshToken: "",
        });
        router.push("/");
      });
    } catch (e: any) {
      // TODO エラーハンドリング考え直す
      console.log(e);
      setIsLogin(false);
      setToken({
        accessToken: "",
        refreshToken: "",
      });
      router.push("/");
    } finally {
      setIsLogin(false);
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    isLogin,
    errorMessage,
    login,
    logout,
  };
};
