import { styled } from "styled-components";

const StyledUserMenu = styled.nav`
  position: absolute;
  right: 0;
  top: 65px;
  box-shadow: 0px 0px 2px ${(props) => props.theme.shadow};
  z-index: 3;

  :not(:first-child) > div {
    border-top: 1px solid ${(props) => props.theme.shadow};
  }

  a {
    text-decoration: none;
    background-color: inherit;
    color: inherit;

    &:hover {
      background-color: inherit;
    }
  }

  div {
    padding: 1rem 2rem;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.accent};
      color: ${(props) => props.theme.secondary};
    }
  }
`;

export default StyledUserMenu;
