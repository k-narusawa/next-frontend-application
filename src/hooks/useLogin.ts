import axios, { AxiosError } from "axios";
import apiClient from "lib/apiClient";
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
      await apiClient
        .post<token>("/api/login", data)
        .then((response) => {
          setIsLogin(true);
          setToken({
            accessToken: response.data.accessToken,
            refreshToken: response.data.refreshToken,
          });
          router.push("/");
        })
        .catch((e: AxiosError<error>) => {
          if (e.response?.data.errorCode === "UN_AUTHORIZED") {
            setErrorMessage("認証に失敗しました");
          } else {
            setErrorMessage("予期せぬエラーが発生しました");
          }
        });
    } catch (e) {
      // TODO エラーハンドリング考え直す
      setIsLogin(false);
      setErrorMessage("予期せぬエラーが発生しました！");
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
        setToken({
          accessToken: "",
          refreshToken: "",
        });
        router.push("/");
      });
    } catch (e: any) {
      // TODO エラーハンドリング考え直す
      console.log(e);
      router.push("/error");
    } finally {
      setIsLogin(false);
      setIsLoading(false);
      setToken({
        accessToken: "",
        refreshToken: "",
      });
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
