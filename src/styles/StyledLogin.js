import { styled } from "styled-components";

const StyledLogin = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  height: 80vh;

  > svg {
    padding: 1rem;
    max-width: 600px;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    margin-top: 2rem;

    svg {
      display: none;
    }
  }
`;

export default StyledLogin;
