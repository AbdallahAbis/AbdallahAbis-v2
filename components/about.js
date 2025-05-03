import Image from "next/image";
import styled from "styled-components";
import device from "../theme/media";
import { slideInBottom, slideInRight } from "../lib/animations";
import Headline from "./custom/headline";
import Paragraph from "./custom/paragraph";

// Styles Start
const Container = styled.section`
  display: flex;
  text-align: left;
  text-align: center;

  @media ${device.xxLarge} {
    text-align: left;
  }
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.xLarge} {
    display: grid;
    grid-template-columns: 1fr max-content;
    grid-template-rows: repeat(3, max-content);
    align-items: center;
    gap: 6rem;
  }
`;
const Title = styled(Headline)`
  margin-bottom: 4rem;
  justify-content: flex-start;
  justify-content: center;

  &.animate {
    animation: ${slideInBottom} var(--animation-duration)
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @media ${device.xLarge} {
    grid-column: 1 / span 2;
    grid-row: 1;
    justify-content: flex-start;
  }
`;
const Bio = styled(Paragraph)`
  margin-bottom: 3rem;

  &.animate {
    animation: ${slideInBottom} var(--animation-duration)
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @media ${device.xLarge} {
    margin-bottom: 0;
    text-align: left;
    grid-column: 1;
    grid-row: 2;
  }
`;
const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1.5rem;
  grid-column-gap: 1rem;
  justify-items: start;
  position: relative;
  padding-left: 10px;
  font-size: 1.4rem;
  text-align: left;

  &.animate {
    animation: ${slideInBottom} var(--animation-duration)
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  &::before {
    display: none;
    content: "";
    position: absolute;
    top: 50%;
    width: 2px;
    height: 90%;
    transform: translate(-100%, -50%);
    background: var(--color-main);

    @media ${device.xLarge} {
      display: block;
      height: 70%;
      display: block;
    }
  }

  @media ${device.large} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${device.xLarge} {
    padding-left: 5rem;
    font-size: 1.5rem;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    justify-items: center;
  }
  @media ${device.xLarge} {
    grid-row-gap: 2.5rem;
    grid-column: 1 / -1;
    grid-row: 3;
    max-width: 100%%;
    justify-items: left;
  }
`;
const Skill = styled.p`
  position: relative;
  line-height: 20px;
  height: max-content;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -5px;
    width: 5px;
    height: 5px;
    transform: translate(-100%, -50%);
    background: var(--color-main);
    opacity: 0.9;
    color: var(--color-text);
  }
`;
const ObjectContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
  margin: 0 auto;
  margin-top: 5rem;
  overflow: hidden;
  border-radius: 5px;

  @media ${device.xLarge} {
    grid-row: 4;
    margin-top: 0;
    margin-left: 0;
    display: block;
    margin-top: 0;
  }
  @media ${device.xxLarge} {
    width: 300px;
    grid-column: 2;
		grid-row: 2;
  }
`;
// Styles End

const About = ({ data: { skills, images, contentHtml, blurredImage } }) => {
  return (
    <Container id="about">
      <InnerContainer>
        <Title data-animate forwardedAs="h2">
          A Little About Me.
        </Title>
        <Bio
          data-animate
          dangerouslySetInnerHTML={{
            __html: contentHtml,
          }}
        />
        <SkillsContainer data-animate>
          {skills.map((skill, i) => (
            <Skill key={i}>{skill}</Skill>
          ))}
        </SkillsContainer>

        <ObjectContainer>
          <PhotoGrid photos={images} />
        </ObjectContainer>
      </InnerContainer>
    </Container>
  );
};

export default About;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media ${device.small} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.large} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.xxLarge} {
    grid-template-columns: 1fr;
  }
`;

const PhotoWrapper = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  width: 100%;
  transition: opacity 0.3s ease;

  &.animate {
    animation: ${slideInRight} var(--animation-duration)
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation-delay: ${({ $index }) => `${$index * 0.1}s`};
  }

  display: ${({ $isPrimary }) => ($isPrimary ? "block" : "none")};

  @media ${device.small} {
    display: ${({ $index }) => ($index < 2 ? "block" : "none")};
  }

  @media ${device.large} {
    display: ${({ $index }) => ($index < 3 ? "block" : "none")};
  }

  @media ${device.xxLarge} {
    display: block;
  }

  .image {
    border-radius: 0.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }
`;

export function PhotoGrid({ photos }) {
  return (
    <Wrapper>
      <Grid>
        {photos.map((photo, index) => (
          <PhotoWrapper
            key={index}
            $isPrimary={photo.primary}
            $index={index}
            data-animate
          >
            <Image src={photo.src} alt={photo.alt} fill className="image" />
          </PhotoWrapper>
        ))}
      </Grid>
    </Wrapper>
  );
}
