import { styled } from "styled-components";

const StyledLogin = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  margin: 6px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    min-width: 300px;
    width: 100%;
    max-width: 600px;
    background-color: ${(props) => props.theme.secondary};
    padding: 2rem;
    border-radius: 6px;
    box-shadow: 0 0 4px ${(props) => props.theme.shadow};
    margin: 0 auto;
    z-index: 2;

    > label {
      display: flex;
      background-color: ${(props) => props.theme.secondary};
      flex-direction: column;
      font-weight: bold;

      > p {
        background-color: ${(props) => props.theme.secondary};
        font-weight: normal;
      }
    }

    input {
      border: none;
      margin-top: 0.5rem;
      background-color: ${(props) => props.theme.secondary};
      border-bottom: 2px solid ${(props) => props.theme.fg};
      padding: 0.5rem;
      font-size: 1rem;
      color: inherit;
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

      > p {
        background-color: ${(props) => props.theme.secondary};
        margin-bottom: 0.5rem;
      }
    }

    > p,
    a,
    h2,
    div {
      background-color: ${(props) => props.theme.secondary};
    }
  }

  > svg {
    padding: 1rem;
    max-width: 600px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    margin-top: 2rem;

    svg {
      display: none;
    }
  }
`;

export default StyledLogin;
