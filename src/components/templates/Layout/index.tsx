import Footer from 'components/organisms/Footer'
import Header from 'components/organisms/Header/index'

type Props = {
  isLogin: boolean,
  isLoading: boolean,
  login: ()=> void,
  logout: () => void,
  children: React.ReactNode
};

const Layout = ({ isLogin, isLoading, login, logout, children }: Props) => {

  return(
    <>
      <Header isLogin={isLogin} isLoading={isLoading} login={login} logout={logout} />
      <main>{children}</main>
      <Footer />
    </>
  ) 
}

export default Layout