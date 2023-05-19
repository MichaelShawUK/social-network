import ThemeSlider from "./ThemeSlider";
import AvatarNav from "./AvatarNav";
import StyledNav from "../styles/StyledNav";
import { useContext } from "react";
import LoggedInContext from "../context/loggedIn";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Nav = ({ setTheme }) => {
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
  return (
    <StyledNav>
      <Link to="/">
        <img src={logo} alt=""></img>
      </Link>
      <input type="text" name="q" placeholder="Find People..."></input>
      <ThemeSlider setTheme={setTheme} />
      {loggedIn && <AvatarNav />}
    </StyledNav>
  );
};

export default Nav;
