import { styled } from "styled-components";

const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.5rem;

  > svg {
    stroke: ${(props) => props.theme.accent};
  }
`;

export default StyledLoading;
