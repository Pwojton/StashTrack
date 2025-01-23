import {
  MenuContainer,
  MenuButton,
  MenuText,
  MenuNavigationContainer,
} from "./MenuComponent.styles";
import MainPageIcon from "../../assets/MainPageIcon.svg?react";
import ProfileIcon from "../../assets/ProfileIcon.svg?react";
import PortfolioIcon from "../../assets/PortfolioIcon.svg?react";
import useScreenWidth from "../../hooks/useScreenWidth";
import LogoComponent from "../LogoComponent/LogoComponent";
import { FC } from "react";

const MenuComponent: FC = () => {
  const screenWidth: number = useScreenWidth();

  if (screenWidth > 1024)
    return (
      <MenuContainer>
        <LogoComponent />
        <MenuNavigationContainer>
          <MenuButton>
            <MenuText>portfolio</MenuText>
          </MenuButton>
          <MenuButton>
            <MenuText>home</MenuText>
          </MenuButton>
          <MenuButton>
            <MenuText>profile</MenuText>
          </MenuButton>
        </MenuNavigationContainer>
      </MenuContainer>
    );

  return (
    <MenuContainer>
      <MenuButton>
        <PortfolioIcon />
      </MenuButton>
      <MenuButton>
        <MainPageIcon />
      </MenuButton>
      <MenuButton>
        <ProfileIcon />
      </MenuButton>
    </MenuContainer>
  );
};

export default MenuComponent;
