import classNames from "classnames";
import styles from "./index.module.scss";
import {
  HomeIcon,
  LoginIcon,
  LogoutIcon,
  PersonIcon,
} from "components/atoms/IconButton";
import { useRouter } from "next/router";

type Props = {
  isLogin: boolean;
  isLoading: boolean;
  logout: () => void;
};

const Header = ({ isLogin, isLoading, logout }: Props) => {
  const router = useRouter();
  const handleHomeIconClick = () => {
    router.push("/");
  };

  return (
    <>
      <header className={classNames(styles["header-component"])}>
        <div className={classNames(styles["home-icon"])}>
          <HomeIcon size="large" onClick={handleHomeIconClick} />
        </div>
        <ul className={classNames(styles["nav-list"])}>
          {(() => {
            if (!isLogin) {
              return (
                <li className={classNames(styles["nav-list-item"])}>
                  <LoginIcon
                    size="large"
                    onClick={() => router.push("/login")}
                  />
                </li>
              );
              // TODO: ローディング処理
            } else if (isLoading) {
              return <></>;
            } else {
              return (
                <li className={classNames(styles["nav-list-item"])}>
                  <PersonIcon size="large" />
                  <LogoutIcon size="large" onClick={logout} />
                </li>
              );
            }
          })()}
        </ul>
      </header>
    </>
  );
};

export default Header;
