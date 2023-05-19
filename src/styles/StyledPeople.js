import { styled } from "styled-components";

const StyledPeople = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 4px;
  box-shadow: 0px 0px 4px ${(props) => props.theme.shadow};
  padding: 1rem 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  .person {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.bg};
    }

    img {
      width: 60px;
      height: 60px;
      object-fit: cover;
      margin-right: 1rem;
    }
  }

  @media (max-width: 700px) {
    border-radius: 0;

    .person {
      font-size: 1rem;
    }
  }
`;

export default StyledPeople;
