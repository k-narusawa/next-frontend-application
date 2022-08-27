import LayoutContainer from 'containers/LayoutContainer';
import { GetServerSideProps, NextPage } from 'next';

type SSRProps = {
  message: string
}

const HomePage: NextPage<SSRProps> = (props) => {
  const {message} = props

  return (
    <>
      <LayoutContainer>
        <h1>TOPページ</h1>
      </LayoutContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<SSRProps> = async(context) => {
  const message = 'message'

  return {
    props: {
      message,
    }
  }
}

export default HomePage