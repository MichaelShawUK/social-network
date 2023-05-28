import { styled } from "styled-components";

const StyledFriendRequest = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 4px;
  box-shadow: 0px 0px 4px ${(props) => props.theme.shadow};
  margin-bottom: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;

  position: relative;

  .loadingContainer {
    background-color: ${(props) => props.theme.secondary};
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 4px;
    opacity: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;

    * {
      background-color: ${(props) => props.theme.secondary};
      border-radius: 4px;
    }
  }

  .pending {
    font-weight: normal;
    font-style: italic;
    text-align: center;
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 6px;
  }

  @media (max-width: 700px) {
    border-radius: 0;
  }
`;

export default StyledFriendRequest;
