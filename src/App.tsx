import Theme from "./styling/theme";
import GlobalStyle from "./styling/global-style";
import Footer from "./components/footer";
import styled from "styled-components";
import HAIRCUT_DATE from "./constants/haircut-day";
import { differenceInDays } from "date-fns";

function App() {
  const today = new Date();
  const daysToGo = differenceInDays(HAIRCUT_DATE, today);

  return (
    <Theme>
      <GlobalStyle />
      <Container>
        <Header>You can get a haircut {daysToGo > 1 ? "in" : null}</Header>
        <Number>{daysToGo > 1 ? daysToGo : "now!"}</Number>
        <div>{daysToGo === 1 ? "day" : "days"}</div>
        <Footer />
      </Container>
    </Theme>
  );
}

export default App;

// styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  margin-top: 16%;
`;

const Number = styled.div`
  margin-top: 5px;
  font-size: xx-large;
`;
