import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      Made by&nbsp;
      <a
        href="https://joshblumberg.netlify.app/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Josh Blumberg
      </a>
    </Container>
  );
};

export default Footer;

// styled components
const Container = styled.div`
  color: ${(p) => p.theme.colors.grey};
  position: absolute;
  top: 95%;
`;
