import Footer from 'components/organisms/Footer'
import Header from 'components/organisms/Header/index'

type Props = {
  isLogin: boolean,
  isLoading: boolean,
  logout: () => void,
  transitionToGitHub: ()=>void;
  children: React.ReactNode
};

const Layout = ({ isLogin, isLoading, logout, transitionToGitHub, children }: Props) => {

  return(
    <>
      <Header isLogin={isLogin} isLoading={isLoading} logout={logout} />
        <main>{children}</main>
      <Footer transitionToGitHub={transitionToGitHub}/>
    </>
  ) 
}

export default Layout