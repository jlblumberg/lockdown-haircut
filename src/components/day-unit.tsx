import styled from "styled-components";

interface DayUnitProps {
  daysToGo: number;
}

const DayUnit = ({ daysToGo }: DayUnitProps) => {
  return <Container>{daysToGo === 1 ? "day" : "days"}</Container>;
};

export default DayUnit;

// styled components
const Container = styled.div`
  position: absolute;
  top: 27%;
`;
