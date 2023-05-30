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
  max-height: 490px;
  overflow-y: auto;

  button {
    margin: 0;
    margin-top: 1rem;
  }

  .header {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .arrow {
    display: none;
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease-out;
    transform: rotate(-90deg);
  }

  .rotate {
    transform: rotate(0deg);
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 6px;
    cursor: pointer;
  }

  .friends {
    margin-top: 1rem;
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
      display: flex;
      justify-content: flex-start;
    }

    .hide {
      display: none;
    }

    .arrow {
      display: inline-block;
    }

    .header {
      cursor: pointer;
    }
  }

  @media (max-width: 700px) {
    border-radius: 0;
    padding: 1rem 1rem;
  }
`;

export default StyledFriendsCard;
