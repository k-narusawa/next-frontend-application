import classNames from 'classnames';
import Button from 'components/atoms/Buttton';
import Input from 'components/atoms/Input';
import styles from './index.module.scss'

type LoginFormProps = {
  onLogin?: (userName: string, password: string) => void
}

const LoginForm = ({onLogin}: LoginFormProps) => {
  return (
    <form>
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
        <Button children='LOGIN' size='small' onClick={()=>{console.log('login challenge')}} />
      </div>
    </form>
  )
}

export default LoginForm