import { MenuContainer, MenuButton } from "./MenuComponent.styles";
import MainPageIcon from "../../assets/MainPageIcon.svg?react";
import ProfileIcon from "../../assets/ProfileIcon.svg?react";
import PortfolioIcon from "../../assets/PortfolioIcon.svg?react";

const MenuComponent = () => {
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
