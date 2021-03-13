import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    background-color: ${(p) => p.theme.colors.beige};
  }
  a { 
    text-decoration: none;
    color: inherit; 
   }
`;
