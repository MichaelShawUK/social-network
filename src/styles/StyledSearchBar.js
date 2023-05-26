import { styled } from "styled-components";

const StyledSearchBar = styled.input`
  background-color: ${(props) => props.theme.bg};
  border: none;
  padding: 12px;
  border-radius: 6px;
  color: inherit;
  margin: 0 2rem;
  font-size: 1rem;
  max-width: 600px;

  @media (max-width: 700px) {
    margin: 0;
    font-size: 14px;
    max-width: none;
  }
`;

export default StyledSearchBar;
