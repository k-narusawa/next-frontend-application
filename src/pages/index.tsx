import Button from 'components/atoms/Buttton';
import Input from 'components/atoms/Input';
import { GetServerSideProps, NextPage } from 'next';

type SSRProps = {
  message: string
}

const HomePage: NextPage<SSRProps> = (props) => {
  const {message} = props

  return (
    <>
      <h1>TOPページ</h1>
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