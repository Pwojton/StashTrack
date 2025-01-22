import styled from "styled-components";
import theme from "../../theme";

export const StyledButton = styled.button`
  color: white;
  background-color: ${theme.colors.loginButtonBackground};

  font-size: ${theme.fontSizes.loginButtonFontSize};

  margin: 25px 0;
  border-radius: 20px;
  width: 150px;
  height: 50px;
`;
