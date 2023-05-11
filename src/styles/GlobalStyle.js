import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.fg}
  }
`;

export default GlobalStyle;
