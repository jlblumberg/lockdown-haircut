import Theme from "./styling/theme";
import GlobalStyle from "./styling/global-style";
import DayUnit from "./components/day-unit";
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
        <Number>
          {daysToGo < 1 ? <div>now!</div> : <div>{daysToGo}</div>}
        </Number>
        <DayUnit daysToGo={daysToGo} />
        <Footer />
      </Container>
    </Theme>
  );
}

export default App;

// styled components

const Container = styled.div`
  display: flex;
  flex-direction: rows;
  justify-content: center;
`;

const Header = styled.div`
  position: absolute;
  top: 20%;
`;

const Number = styled.div`
  position: absolute;
  top: 25%;
`;
