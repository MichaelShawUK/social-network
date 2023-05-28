import { styled } from "styled-components";
import StyledNav from "./StyledNav";

const StyledLoggedOutNav = styled(StyledNav)`
  grid-template-columns: 64px 1fr;
  justify-content: space-between;

  :last-child {
    justify-self: flex-end;
  }
`;

export default StyledLoggedOutNav;
