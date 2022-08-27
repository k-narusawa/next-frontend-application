import Layout from 'components/templates/Layout/index'
import { useLogin } from 'hooks/useLogin'

type LayoutContainerProps = {
  children: React.ReactNode
}

const LayoutContainer = ( { children }: LayoutContainerProps)=>{
  const {isLogin, isLoading, logout} = useLogin()
  console.log(isLogin)

  return (
    <>
      <Layout isLogin={isLogin} isLoading={isLoading} logout={logout}  >
        <main>{children}</main>
      </Layout>
    </>
  )
}

export default LayoutContainer