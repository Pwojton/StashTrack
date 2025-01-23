import styled from "styled-components";
import theme from "../../theme";
import { FlexCenter } from "../../sharedStyles";

export const LogoContainer = styled.div`
  ${FlexCenter};
  margin: 0 5%;

  p {
    font-size: ${theme.fontSizes.logoFontSize};
    font-weight: ${theme.fontWeights.logoBold};
    margin-left: 10px;
  }
`;
