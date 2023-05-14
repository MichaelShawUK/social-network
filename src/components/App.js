import { Outlet } from "react-router-dom";
import { lightTheme } from "../styles/themes";
import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Nav from "./Nav";

import LoggedInContext from "../context/loggedIn";

const App = () => {
  const [theme, setTheme] = useState(lightTheme);
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <LoggedInContext.Provider value={[loggedIn, setLoggedIn]}>
        <GlobalStyle />
        <Nav setTheme={setTheme} />
        <Outlet />
      </LoggedInContext.Provider>
    </ThemeProvider>
  );
};

export default App;
