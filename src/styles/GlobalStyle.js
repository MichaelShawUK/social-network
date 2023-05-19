import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif;
  }

  a:visited {
    color: inherit;
  }

  body {
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.fg};
  }

  .error {
    color: red;
  }
`;

export default GlobalStyle;
