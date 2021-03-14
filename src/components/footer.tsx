import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <TextContainer>
        Made by&nbsp;
        <a
          href="https://joshblumberg.netlify.app/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Josh Blumberg
        </a>
      </TextContainer>
      <ImageContainer
        width="200"
        height="200"
        src="https://i.imgur.com/Yh63Ff8.png"
        alt="boris"
      />
    </Container>
  );
};

export default Footer;

// styled components
const Container = styled.div`
  position: absolute;
  bottom -3.5rem;
`;

const TextContainer = styled.div`
  text-align: center;
  color: ${(p) => p.theme.colors.grey};
`;

const ImageContainer = styled.img`
  display: block;
`;
