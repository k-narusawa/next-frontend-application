import { apiClient } from 'lib/apiClient'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { loginSelector } from 'states/selectors/loginSelector'

export const useLogin = () => {
  const setIsLogin = useSetRecoilState(loginSelector)
  const [isLoading, setIsLoading] = useState(false)
  const isLogin = useRecoilValue(loginSelector)
  const router = useRouter()
  const sleep = (second: number) => new Promise(resolve => setTimeout(resolve, second * 1000))

  const login = useCallback(
    async(
      loginId: string,
      password: string
    ) => {
    //   const data = {loginId: loginId, password: password}
    //   await apiClient.post<login>("/api/login", data)
    //   .then((response) => {
    //     setIsLogin(true)
    //     return {
    //       accessToken: response.data.accessToken,
    //       refreshToken: response.data.refreshToken
    //     }
    //   })
    //   .catch((e) => {
    //     setIsLogin(false)
    //     console.log(e)
    //   })
      setIsLogin(true)
      setIsLoading(false)
      router.push("/")
    },[setIsLoading],
  )

  const logout = useCallback(
    () => {
      setIsLogin(false)
      setIsLoading(false)
    },
    [],
  )

  return {
    isLoading,
    isLogin,
    login,
    logout
  }
}