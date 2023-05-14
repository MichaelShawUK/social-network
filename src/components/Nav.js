import ThemeSlider from "./ThemeSlider";
import AvatarNav from "./AvatarNav";
import StyledNav from "../styles/StyledNav";
import { useContext } from "react";
import LoggedInContext from "../context/loggedIn";

const Nav = ({ setTheme }) => {
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
  return (
    <StyledNav>
      <ThemeSlider setTheme={setTheme} />
      {loggedIn && <AvatarNav />}
    </StyledNav>
  );
};

export default Nav;
