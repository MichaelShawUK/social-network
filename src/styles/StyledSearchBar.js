import { styled } from "styled-components";

const StyledSearchBar = styled.form`
  background-color: ${(props) => props.theme.secondary};
  padding: 1rem;
  margin: 0 auto;
  max-width: 700px;
  box-shadow: 0px 0px 4px ${(props) => props.theme.shadow};
  margin-bottom: 1rem;
  display: none;

  input {
    background-color: ${(props) => props.theme.bg};
    border: none;
    padding: 12px;
    border-radius: 6px;
    color: inherit;

    &:focus-visible {
      outline: 1px solid ${(props) => props.theme.fg};
    }
  }

  @media (max-width: 700px) {
    display: grid;
  }
`;

export default StyledSearchBar;
