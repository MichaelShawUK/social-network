import { styled } from "styled-components";

const StyledFriendsCard = styled.div`
  background-color: ${(props) => props.theme.secondary};
  max-width: 800px;
  box-shadow: 0px 0px 4px ${(props) => props.theme.shadow};
  padding: 1rem 2rem;
  border-radius: 4px;
  margin: 0 auto;
  position: fixed;
  width: 300px;
  margin-left: 1rem;
  max-height: 600px;
  overflow-y: auto;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    background-color: palegreen;
    border-radius: 6px;
    cursor: pointer;
  }

  .friends {
    margin-top: 0.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, 100px);
    justify-content: space-between;
    gap: 6px;
  }

  @media (max-width: 1500px) {
    position: relative;
    width: auto;
    margin: 0 auto 1.5rem;
    height: auto;
    max-height: 100%;

    .friends {
      display: none;
    }
  }

  @media (max-width: 800px) {
    .friends {
      justify-content: space-between;
    }
  }

  @media (max-width: 700px) {
    border-radius: 0;
    padding: 1rem 1rem;
  }
`;

export default StyledFriendsCard;
