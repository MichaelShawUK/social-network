import { styled } from "styled-components";

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  background-color: ${(props) => props.theme.accent};
  color: #000;
  font-weight: bold;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 0px 5px ${(props) => props.theme.shadow};

  &:hover {
    color: ${(props) => props.theme.bg};
    background-color: ${(props) => props.theme.fg};
  }
`;

export default StyledButton;
