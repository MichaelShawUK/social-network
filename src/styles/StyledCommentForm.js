import { styled } from "styled-components";

const StyledCommentForm = styled.div`
  margin: 1rem 0%;

  > form {
    display: grid;
    grid-template-columns: 1fr 150px;

    > button {
      width: max-content;
      height: min-content;
      justify-self: flex-end;
      background-color: ${(props) => props.theme.accent};
    }
  }

  input {
    background-color: ${(props) => props.theme.bg};
    padding: 12px;
    border-radius: 6px;
    border: none;
    width: 100%;
    font-size: 1rem;
    color: inherit;

    &:focus-visible {
      outline: 1px solid ${(props) => props.theme.fg};
    }
  }

  @media (max-width: 700px) {
    > form {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
    }

    input {
      font-size: 14px;
    }
  }
`;

export default StyledCommentForm;
