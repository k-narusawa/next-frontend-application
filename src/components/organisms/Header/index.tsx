import classNames from 'classnames'
import styles from './index.module.scss'
import HomeIcon from '@mui/icons-material/Home';

type Props = {
  isLogin: boolean,
  isLoading: boolean,
  logout: () => void
};

const Header = ({ isLogin, isLoading, logout }: Props) => {

  return(
    <>
      <header className={classNames(
        styles['header-component']
      )} >
        <h1 className={classNames(
          styles['headline']
        )} >
          <a><HomeIcon fontSize="large" /></a>
        </h1>
        <ul className={classNames(
          styles['nav-list']
        )}>
          {(() => {
            if(!isLogin){
              return (
                <li className={classNames(
                  styles['nav-items']
                )}>
                  <a href="/login">ログイン</a>
                </li>
              )
            // TODO: ローディング処理
            }else if(isLoading){
              return (
                <>
                </>
              )  
            } else {
              return (
                <li className={classNames(
                  styles['nav-items']
                )}>
                  <a href="/" onClick={logout} >ログアウト</a>
                </li>
              )
            }
          })()}
        </ul>
      </header>
    </>
  ) 
}

export default Header