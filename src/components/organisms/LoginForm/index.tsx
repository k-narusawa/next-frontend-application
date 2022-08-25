import classNames from 'classnames';
import Button from 'components/atoms/Buttton';
import Input from 'components/atoms/Input';
import { useForm } from 'react-hook-form';
import styles from './index.module.scss'

export type LoginFormData = {
  loginId: string
  password: string
}

type LoginFormProps = {
  onLogin?: (loginId: string, password: string) => void
}

const LoginForm = ({onLogin}: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>()

  const onSubmit = (data: LoginFormData) => {
    const { loginId, password } = data

    onLogin && onLogin(loginId, password)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classNames(
        styles['login-form-component']
      )}>
        <div className={classNames(
          styles['login-form']
        )}>
          <Input label='ログインID' />
        </div>
        <div className={classNames(
          styles['login-form']
        )}>
          <Input label='パスワード' />
        </div>
        <Button children='LOGIN' size='small' onClick={()=>{console.log('login challenge')}} type="submit" />
      </div>
    </form>
  )
}

export default LoginForm