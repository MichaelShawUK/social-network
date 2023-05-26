import { styled } from "styled-components";

const StyledEditProfile = styled.form`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  gap: 0.5rem;
  background-color: ${(props) => props.theme.secondary};
  padding: 1rem 2rem;
  border-radius: 4px;
  box-shadow: 0px 0px 4px ${(props) => props.theme.shadow};

  .resetButton {
    justify-self: flex-start;
  }

  .avatarImage {
    height: 60px;
    width: 60px;
    object-fit: cover;
    border-radius: 6px;
  }

  > input,
  h3 {
    margin-bottom: 0.5rem;
  }

  > input {
    background-color: ${(props) => props.theme.bg};
    border: none;
    padding: 12px;
    border-radius: 6px;
    color: inherit;

    &:focus-visible {
      outline: 1px solid ${(props) => props.theme.fg};
    }
  }

  > input[type="file"] {
    background-color: ${(props) => props.theme.secondary};
    cursor: pointer;
    padding-left: 0;
  }

  > button {
    min-width: 100px;
    width: max-content;
    justify-self: center;
  }

  @media (max-width: 700px) {
    padding: 1rem 1rem;
    border-radius: 0;
  }
`;

export default StyledEditProfile;
