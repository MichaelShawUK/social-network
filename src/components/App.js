import { Outlet } from "react-router-dom";
import { darkTheme } from "../styles/themes";
import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Nav from "./Nav";

const App = () => {
  const [theme, setTheme] = useState(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav setTheme={setTheme} />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
