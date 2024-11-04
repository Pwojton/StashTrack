import styled from "styled-components";

export const MenuButton = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;

  margin: auto;
`;

export const MenuContainer = styled.div`
  position: fixed;

  display: flex;
  justify-content: center;

  bottom: -1px;
  left: 0;

  width: 100%;
  height: 7%;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  /* desktop transition */
  @media (min-width: 1024px) {
    top: 0;
  }
`;
