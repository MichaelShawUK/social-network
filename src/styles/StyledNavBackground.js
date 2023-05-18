import { styled } from "styled-components";

const StyledNavBackground = styled.div`
  height: 96px;
  background-color: ${(props) => props.theme.bg};
  z-index: -1;
`;

export default StyledNavBackground;
