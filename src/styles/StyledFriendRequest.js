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
