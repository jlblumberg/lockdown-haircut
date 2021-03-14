import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Text>
        Made by&nbsp;
        <a
          href="https://joshblumberg.netlify.app/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Josh Blumberg
        </a>
      </Text>
      <div>
        <img
          width="300"
          height="300"
          src="https://i.imgur.com/Yh63Ff8.png"
          alt="boris"
        />
      </div>
    </Container>
  );
};

export default Footer;

// styled components
const Text = styled.div`
  text-align: center;
`;

const Container = styled.div`
  color: ${(p) => p.theme.colors.grey};
  position: absolute;
  bottom: -12%;
`;
