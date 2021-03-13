import { createGlobalStyle } from "styled-components";
import Theme from "./styling/theme";

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <div>hello world</div>
    </Theme>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(p) => p.theme.colors.beige};
  }
`;
