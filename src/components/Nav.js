import ThemeSlider from "./ThemeSlider";
import AvatarNav from "./AvatarNav";
import StyledNav from "../styles/StyledNav";
import SearchBar from "./SearchBar";
import { useContext } from "react";
import LoggedInContext from "../context/loggedIn";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Nav = ({ setTheme }) => {
  const loggedIn = useContext(LoggedInContext)[0];
  return (
    <StyledNav>
      <Link to="/">
        <img src={logo} alt=""></img>
      </Link>
      <input type="text" name="q" placeholder="Find People..."></input>
      {/* <SearchBar /> */}
      <ThemeSlider setTheme={setTheme} />
      {loggedIn && <AvatarNav />}
    </StyledNav>
  );
};

export default Nav;
