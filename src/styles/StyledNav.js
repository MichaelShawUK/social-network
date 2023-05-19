import { styled } from "styled-components";

const StyledNav = styled.nav`
  background-color: ${(props) => props.theme.secondary};
  box-shadow: 0 0 4px ${(props) => props.theme.shadow};
  display: grid;
  align-items: center;
  grid-template-columns: 64px 5fr 1fr 64px;
  padding: 0 0.5rem;
  margin-bottom: 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9;

  * {
    background-color: ${(props) => props.theme.secondary};
  }

  a {
    height: 64px;
  }

  h1 {
    color: ${(props) => props.theme.accent};
    font-size: 2rem;
    margin-left: 1rem;
  }

  > div {
    height: 64px;
  }

  input {
    background-color: ${(props) => props.theme.bg};
    border: none;
    padding: 12px;
    border-radius: 6px;
    margin: 0 2rem;
    font-size: 1rem;
    max-width: 600px;
    color: inherit;
  }

  img {
    width: 64px;
    height: 64px;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr 124px 64px;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;

    input {
      display: none;
    }

    div {
      justify-self: center;
    }

    :last-child {
      justify-self: flex-end;
    }
  }
`;

export default StyledNav;
