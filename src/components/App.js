import { Outlet } from "react-router-dom";
import { lightTheme } from "../styles/themes";
import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Nav from "./Nav";
import StyledNavBackground from "../styles/StyledNavBackground";

import LoggedInContext from "../context/loggedIn";
import NavMenuContext from "../context/navMenu";

const App = () => {
  const [theme, setTheme] = useState(lightTheme);
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("token"))
  );
  const [showMenu, setShowMenu] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <LoggedInContext.Provider value={[loggedIn, setLoggedIn]}>
        <NavMenuContext.Provider value={[showMenu, setShowMenu]}>
          <GlobalStyle />
          <StyledNavBackground />
          <Nav setTheme={setTheme} setQuery={setQuery} query={query} />
          <Outlet context={[query, setQuery]} />
        </NavMenuContext.Provider>
      </LoggedInContext.Provider>
    </ThemeProvider>
  );
};

export default App;
