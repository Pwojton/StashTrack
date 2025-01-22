import { FC } from "react";
import { StyledInput } from "./InputComponent.styles";

interface InputComponentProps {
  isPass?: boolean;
  placeholder: string;
}

const InputComponent: FC<InputComponentProps> = ({ isPass, placeholder }) => {
  return (
    <StyledInput
      type={isPass ? "password" : "text"}
      placeholder={placeholder}
    />
  );
};

export default InputComponent;
