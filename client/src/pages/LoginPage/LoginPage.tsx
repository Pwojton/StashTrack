import { FC } from "react";
import LogoComponent from "../../components/LogoComponent/LogoComponent";
import { LoginPageContainer } from "./LoginPage.styles";
import InputComponent from "../../components/InputComponent/InputComponent";
import { LoginFormContainer } from "../../components/InputComponent/InputComponent.styles";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

const LoginPage: FC = () => {
  return (
    <LoginPageContainer>
      <LogoComponent />
      <LoginFormContainer>
        <InputComponent placeholder="Login" />
        <InputComponent isPass={true} placeholder="Password" />
        <ButtonComponent buttonText="Sing In" />
      </LoginFormContainer>
    </LoginPageContainer>
  );
};

export default LoginPage;
