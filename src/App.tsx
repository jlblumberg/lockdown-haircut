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
      <PageContainer>
        <Header>
          <Title>You can get a haircut {daysToGo > 1 ? "in" : null}</Title>
          <Number>{daysToGo > 1 ? daysToGo : "now!"}</Number>
          <div>{daysToGo === 1 ? "day" : "days"}</div>
        </Header>
        <Footer />
      </PageContainer>
    </Theme>
  );
}

export default App;

// styled components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  align-items: center;
  position: relative;
`;

const Header = styled.div`
  text-align: center;
  position: absolute;
  top: 25%;
`;

const Title = styled.div``;

const Number = styled.div`
  margin: 5px 0px;
  font-size: xx-large;
`;
