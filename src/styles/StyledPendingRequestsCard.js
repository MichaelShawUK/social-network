import { styled } from "styled-components";

const StyledPendingRequestsCard = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 4px;
  box-shadow: 0px 0px 4px ${(props) => props.theme.shadow};
  margin-bottom: 1rem;
  padding: 1rem;

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

  .requests {
    margin-top: 1rem;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  @media (max-width: 700px) {
    border-radius: 0;
  }
`;

export default StyledPendingRequestsCard;
