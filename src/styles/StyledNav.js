import { styled } from "styled-components";

const StyledNav = styled.nav`
  background-color: ${(props) => props.theme.secondary};
  box-shadow: 0 0 4px ${(props) => props.theme.shadow};
  display: grid;
  grid-template-columns: 1fr 64px;
  padding: 0 0.5rem;
  margin-bottom: 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9;

  * {
    background-color: ${(props) => props.theme.secondary};
  }

  > div {
    height: 64px;
  }

  img {
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }
`;

export default StyledNav;
