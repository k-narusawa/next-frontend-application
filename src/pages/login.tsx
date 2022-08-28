import LayoutContainer from "containers/LayoutContainer";
import LoginFormContaier from "containers/LoginFormContainer";
import { NextPage } from "next";

const LoginPage: NextPage = () => {
  return (
    <LayoutContainer>
      <LoginFormContaier />
    </LayoutContainer>
  );
};
export default LoginPage;
