import { styled } from "styled-components";

const StyledPostPrompt = styled.div`
  padding: 2rem;
  padding-bottom: 1rem;
  background-color: ${(props) => props.theme.secondary};
  box-shadow: 0px 0px 4px ${(props) => props.theme.shadow};
  max-width: 800px;
  margin: 0 auto;
  border-radius: 4px;

  .fileLabel {
    font-weight: bold;
    cursor: pointer;
    padding: 0.5rem;
    grid-area: image;
    grid-column: 1/-1;
    justify-self: center;
    margin-top: 0.5rem;
  }

  .camera {
    vertical-align: 2px;
  }

  form {
    background-color: ${(props) => props.theme.secondary};
    display: grid;
    grid-template:
      "text button" 1fr
      "image image" 1fr / 1fr 150px;
    align-items: center;

    > button {
      width: max-content;
      height: min-content;
      justify-self: flex-end;
      grid-area: button;
    }
  }

  .textInput {
    background-color: ${(props) => props.theme.bg};
    padding: 12px;
    border-radius: 6px;
    border: none;
    width: 100%;
    font-size: 1rem;
    color: inherit;
    grid-area: text;

    &:focus-visible {
      outline: 1px solid ${(props) => props.theme.fg};
    }
  }

  @media (max-width: 700px) {
    padding: 1rem;
    border-radius: 0;

    .fileLabel {
      margin-top: 0;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .textInput {
      font-size: 14px;
    }
  }
`;

export default StyledPostPrompt;
