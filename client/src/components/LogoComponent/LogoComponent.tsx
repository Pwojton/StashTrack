import LogoIcon from "../../assets/Logo.svg?react";
import { LogoContainer } from "./LogoComponent.styles";

const LogoComponent = () => {
  return (
    <LogoContainer>
      <LogoIcon />
      <p>StashTrack</p>
    </LogoContainer>
  );
};

export default LogoComponent;
