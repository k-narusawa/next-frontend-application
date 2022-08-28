import { AxiosError } from 'axios'
import { apiClient } from 'lib/apiClient'
import { useRouter } from 'next/router'
import { config } from 'process'
import { useCallback, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { loginSelector } from 'states/selectors/loginSelector'
import { tokenSelector } from 'states/selectors/tokenSelector'
import { error, token } from 'types'

export const useLogin = () => {
  const setIsLogin = useSetRecoilState(loginSelector)
  const setToken = useSetRecoilState(tokenSelector)
  const [isLoading, setIsLoading] = useState(false)
  const isLogin = useRecoilValue(loginSelector)
  const token = useRecoilValue(tokenSelector)
  const [errorMessage, setErrorMessage] = useState('')
  const router = useRouter()

  const login = useCallback(
    async(loginId: string, password: string) => {
      const data = {loginId: loginId, password: password}

      await apiClient.post<token>("/api/login", data)
        .then((response) => {
          setIsLogin(true)
          setToken({
            accessToken: response.data.accessToken,
            refreshToken: response.data.refreshToken
          })
          router.push("/")
        })
        // TODO エラーハンドリング考え直す
        .catch((e: AxiosError<error>) => {
          setIsLogin(false)
          if(e.response?.data.errorCode === 'UN_AUTHORIZED'){
            setErrorMessage('認証に失敗しました')
          } else if (e.response?.data.errorCode === 'SERVER_ERROR'){
            setErrorMessage('サーバーエラーが発生しました')
          } else {
            setErrorMessage('予期せぬエラーが発生しました')
          }
        })
        
      setIsLoading(false)
    },[setIsLoading],
  )

  const logout = useCallback(
    async() => {
      const config = {
        headers: {
          'Authorization': 'Bearer ' + token.accessToken
        }
      }
      await apiClient.post("/api/logout", undefined, config)
        .then(() => {
          setIsLogin(true)
          setToken({
            accessToken: '',
            refreshToken: ''
          })
          router.push("/")
        })
        // TODO エラーハンドリング考え直す
        .catch((e: AxiosError<error>) => {
          setIsLogin(false)
          setToken({
            accessToken: '',
            refreshToken: ''
          })
          router.push("/")
        })
      setIsLogin(false)
      setIsLoading(false)
    },[setIsLoading]
  )

  return {
    isLoading,
    isLogin,
    errorMessage,
    login,
    logout
  }
}