import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html, body {
    background-color: ${(p) => p.theme.colors.beige};
    font-family: "Helvetica";
    height: 100%;
  }
  a { 
    text-decoration: none;
    color: inherit; 
   }
`;
