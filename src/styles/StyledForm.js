import { styled } from "styled-components";
import { Form } from "react-router-dom";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  max-width: 600px;
  background-color: ${(props) => props.theme.secondary};
  padding: 2rem;
  border-radius: 6px;
  box-shadow: 0 0 2px ${(props) => props.theme.fg};
  margin: 0 auto;

  > label {
    display: flex;
    background-color: ${(props) => props.theme.secondary};
    flex-direction: column;
    font-weight: bold;
  }

  input {
    border: none;
    margin-top: 0.5rem;
    background-color: ${(props) => props.theme.secondary};
    border-bottom: 2px solid ${(props) => props.theme.fg};
    padding: 0.5rem;
    font-size: 1rem;
  }

  input:focus-visible {
    outline: none;
  }

  input:active,
  input:focus {
    border-bottom: 2px solid ${(props) => props.theme.accent};
  }

  > button {
    width: max-content;
  }

  > div {
    display: flex;
    flex-direction: column;
  }

  > p,
  a,
  h2,
  div {
    background-color: ${(props) => props.theme.secondary};
  }
`;

export default StyledForm;
