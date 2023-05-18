import { styled } from "styled-components";

const StyledPostCard = styled.div`
  background-color: ${(props) => props.theme.secondary};
  max-width: 800px;
  margin: 0 auto;

  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.secondary};
  box-shadow: 0px 0px 4px ${(props) => props.theme.shadow};
  max-width: 800px;
  margin: 1.5rem auto;
  border-radius: 4px;

  * {
    background-color: ${(props) => props.theme.secondary};
  }

  .post-text {
    margin-bottom: 1rem;
  }

  .post-image {
    max-width: 100%;
    object-fit: cover;
    border-radius: 6px;
  }

  .post-image-container {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }

  > footer {
    display: grid;
    grid-template-columns: 1fr 1fr;

    > svg {
      justify-self: center;
      width: 80%;
      cursor: pointer;
      &:hover {
        background-color: ${(props) => props.theme.hover};
      }
    }
  }

  @media (max-width: 700px) {
    padding: 1rem;
    border-radius: 0;

    > footer {
      > svg {
        height: 24px;
        width: 24px;
      }
    }
  }
`;

export default StyledPostCard;
