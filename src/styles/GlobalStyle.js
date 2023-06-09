import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif;
  }

  a {
    color: inherit;
  }

  body {
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.fg};
  }

  .error {
    color: red;
  }

  .center {
    text-align: center;
  }

  .postcards-header {
    text-align: center;
    font-weight: bold;
    margin-top: 1.5rem;
  }

`;

export default GlobalStyle;
