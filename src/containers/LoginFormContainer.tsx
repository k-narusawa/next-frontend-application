import LoginForm from 'components/organisms/LoginForm'
import Layout from 'components/templates/Layout/index'
import { useLogin } from 'hooks/useLogin'

type LayoutContainerProps = {
  children: React.ReactNode
}

const LoginFormContaier = ( { children }: LayoutContainerProps)=>{
  const {isLogin, login} = useLogin()
  console.log(isLogin)

  return (
    <LoginForm onLogin={login} />
  )
}
export default LoginFormContaier