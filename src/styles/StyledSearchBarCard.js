import { styled } from "styled-components";

const StyledSearchBarCard = styled.div`
  background-color: ${(props) => props.theme.secondary};
  padding: 1rem;
  margin: 0 auto;
  box-shadow: 0 0 4px ${(props) => props.theme.shadow};
  margin-bottom: 1rem;
  display: none;

  @media (max-width: 700px) {
    display: grid;
  }
`;

export default StyledSearchBarCard;
