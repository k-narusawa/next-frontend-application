import LoginForm from 'components/organisms/LoginForm'
import { useLogin } from 'hooks/useLogin'

const LoginFormContaier = ()=>{
  const {login, errorMessage} = useLogin()

  return (
    <LoginForm onLogin={login} errorMessage={errorMessage} />
  )
}
export default LoginFormContaier