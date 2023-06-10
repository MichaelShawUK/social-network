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

  position: relative;

  * {
    background-color: ${(props) => props.theme.secondary};
  }

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

  .post-text {
    margin-bottom: 1rem;
    overflow-wrap: break-word;
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

  @media (max-width: 700px) {
    padding: 1rem;
    border-radius: 0;
  }
`;

export default StyledPostCard;
