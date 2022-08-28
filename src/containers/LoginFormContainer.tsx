import LoginForm from 'components/organisms/LoginForm'
import { useLogin } from 'hooks/useLogin'

const LoginFormContaier = ()=>{
  const {login} = useLogin()

  return (
    <LoginForm onLogin={login} />
  )
}
export default LoginFormContaier