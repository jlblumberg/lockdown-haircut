import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <div>
        Made by&nbsp;
        <a
          href="https://joshblumberg.netlify.app/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Josh Blumberg
        </a>
      </div>
      <div>
        <img
          width="200"
          height="200"
          src="https://i.imgur.com/Yh63Ff8.png"
          alt="boris"
        />
      </div>
    </Container>
  );
};

export default Footer;

// styled components
const Container = styled.div`
  color: ${(p) => p.theme.colors.grey};
  position: absolute;
  top: 80%;
`;
