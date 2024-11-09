import styled from "styled-components";
import { FlexCenter } from "../../sharedStyles";
import theme from "../../theme";

export const MenuContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  height: 8%;
  background-color: ${theme.colors.menuBackground};
  box-shadow: ${theme.boxShadow};
  ${FlexCenter};

  @media (min-width: 1024px) {
    top: 0;
    height: 10%;
  }
`;

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin: auto;
  ${FlexCenter};
`;

export const MenuText = styled.p`
  text-transform: uppercase;
  font-size: ${theme.fontSizes.menuFontSize};
  font-weight: ${theme.fontWeights.menuItemBold};
  margin: 0;
`;

export const MenuNavigationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0 5%;
`;
