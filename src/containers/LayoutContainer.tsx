import Layout from 'components/templates/Layout/index'
import { useLogin } from 'hooks/useLogin'
import { useRouter } from 'next/router'

type LayoutContainerProps = {
  children: React.ReactNode
}

const LayoutContainer = ( { children }: LayoutContainerProps)=>{
  const {isLogin, isLoading, logout} = useLogin()
  const router = useRouter()

  return (
    <>
      <Layout 
        isLogin={isLogin} 
        isLoading={isLoading} 
        logout={logout} 
        transitionToGitHub={()=>router.push('https://github.com/k-narusawa')}
      >
        <main>{children}</main>
      </Layout>
    </>
  )
}

export default LayoutContainer