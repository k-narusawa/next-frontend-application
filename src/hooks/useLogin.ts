import { apiClient } from 'lib/apiClient'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { loginSelector } from 'states/selectors/loginSelector'
import { tokenSelector } from 'states/selectors/tokenSelector'
import { login } from 'types'

export const useLogin = () => {
  const setIsLogin = useSetRecoilState(loginSelector)
  const setToken = useSetRecoilState(tokenSelector)
  const [isLoading, setIsLoading] = useState(false)
  const isLogin = useRecoilValue(loginSelector)
  const router = useRouter()

  const login = useCallback(
    async(
      loginId: string,
      password: string
    ) => {
      const data = {loginId: loginId, password: password}
      await apiClient.post<login>("/api/login", data)
        .then((response) => {
          setIsLogin(true)
          setToken({
            accessToken: response.data.accessToken,
            refreshToken: response.data.refreshToken
            })
        })
        .catch((e) => {
          setIsLogin(false)
          console.log(e)
        })
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