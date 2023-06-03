import ThemeSlider from "./ThemeSlider";
import AvatarNav from "./AvatarNav";
import StyledNav from "../styles/StyledNav";
import StyledLoggedOutNav from "../styles/StyledLoggedOutNav";
import SearchBar from "./SearchBar";
import { useContext, useState } from "react";
import LoggedInContext from "../context/loggedIn";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Nav = ({ setTheme, setQuery, query }) => {
  const loggedIn = useContext(LoggedInContext)[0];
  const [checked, setChecked] = useState(false);
  return (
    <>
      {loggedIn ? (
        <StyledNav>
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
          <SearchBar setQuery={setQuery} query={query} />
          <ThemeSlider
            setTheme={setTheme}
            checked={checked}
            setChecked={setChecked}
          />
          <AvatarNav />
        </StyledNav>
      ) : (
        <StyledLoggedOutNav>
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
          <ThemeSlider
            setTheme={setTheme}
            checked={checked}
            setChecked={setChecked}
          />
        </StyledLoggedOutNav>
      )}
    </>
  );
};

export default Nav;
