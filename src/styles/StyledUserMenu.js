import { styled } from "styled-components";

const StyledUserMenu = styled.nav`
  position: absolute;
  right: 0;
  top: 64px;
  box-shadow: -1px 1px 3px black;
  z-index: 3;

  > div {
    padding: 1rem 2rem;
    cursor: pointer;
    border-bottom: 1px solid silver;

    &:hover {
      background-color: ${(props) => props.theme.bg};
    }
  }
`;

export default StyledUserMenu;
