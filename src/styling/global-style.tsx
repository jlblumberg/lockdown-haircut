import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    background-color: ${(p) => p.theme.colors.beige};
    min-height: -webkit-fill-available;
    font-family: "Helvetica"
  }
  html {
    height: -webkit-fill-available;
  }
  a { 
    text-decoration: none;
    color: inherit; 
   }
`;
