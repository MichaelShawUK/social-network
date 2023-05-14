import { styled } from "styled-components";

const StyledPostPrompt = styled.div`
  padding: 2rem;
  padding-bottom: 1rem;
  background-color: ${(props) => props.theme.secondary};
  box-shadow: 0px 0px 4px ${(props) => props.theme.shadow};
  max-width: 800px;
  margin: 0 auto;
  border-radius: 4px;

  > section {
    background-color: ${(props) => props.theme.secondary};
    display: grid;
    grid-template-columns: 1fr 150px;
    align-items: center;

    > button {
      width: max-content;
      height: min-content;
      justify-self: flex-end;
    }
  }

  > div {
    background-color: ${(props) => props.theme.secondary};
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }

  input {
    padding: 12px;
    border-radius: 6px;
    /* border-top-right-radius: 6px; */
    /* border-top-left-radius: 6px; */
    border: none;
    width: 100%;
    font-size: 1rem;

    &:focus-visible {
      outline: 1px solid ${(props) => props.theme.fg};
    }
  }
`;

export default StyledPostPrompt;
