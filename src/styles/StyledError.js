import { styled } from "styled-components";

const StyledError = styled.div`
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fg};
  display: flex;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export default StyledError;
