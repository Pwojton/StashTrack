import { FC } from "react";
import { StyledButton } from "./ButtonComponent.styles";

interface ButtonProps {
  buttonText: String;
}

const ButtonComponent: FC<ButtonProps> = ({ buttonText }) => {
  return <StyledButton>{buttonText}</StyledButton>;
};

export default ButtonComponent;
