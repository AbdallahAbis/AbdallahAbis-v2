import { Link } from "gatsby"
import React, { useRef } from "react"
import styled from "styled-components"
import device from "../theme/media"
import {
  slideInBottom,
  slideInLeftBlurred,
  tiltInBottomRight,
} from "../utils/animations"
import CustomButton from "./custom/custom-button"
import Computer from "./inner-containers/computer"

const Container = styled.div`
  margin-top: 5rem;

  @media ${device.xSmall} {
    margin-top: 3rem;
  }

  @media ${device.medium} {
    max-width: 62rem;
  }
  @media ${device.large} {
    display: grid;
    grid-template-columns: fit-content(59rem) 1fr;
    max-width: 1025px;
  }
  @media ${device.xLarge} {
    grid-template-columns: 1fr 1fr;
    max-width: 1280px;
  }
  @media ${device.xxLarge} {
    max-width: 1441px;
  }
  @media ${device.huge} {
    max-width: 1921px;
  }
`
const ContentContainer = styled.div`
  text-align: center;

  @media ${device.large} {
    grid-column: 1;
    text-align: left;

    margin-top: 8rem;
  }
`

const Headline = styled.h1`
  line-height: 1.32;
  font-size: 3.2rem;
  margin-bottom: 3rem;
  position: relative;
  animation: ${slideInBottom} 0.5s 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;

  @media ${device.xSmall} {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  @media ${device.medium} {
    font-size: 5rem;
    margin-bottom: 4rem;
  }
  @media ${device.large} {
    font-size: 5.5rem;
    width: 85%;
    animation-delay: 2.7s;
  }
`

const Description = styled.p`
  opacity: 0.9;
  line-height: 1.55;
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0 auto 6rem;
  animation: ${slideInBottom} 0.5s 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;

  @media ${device.xSmall} {
    font-size: 1.5rem;
  }
  @media ${device.medium} {
    max-width: 85%;
  }
  @media ${device.large} {
    max-width: 75%;
    margin-left: 0;
    animation-delay: 3s;
  }
`

const ComputerContainer = styled.div`
  display: none;

  @media ${device.large} {
    display: block;
    animation: ${tiltInBottomRight} 0.3s 3.5s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
`

const Button = styled(CustomButton)`
  padding: 2rem 2.5rem;
  font-size: 1.5rem;
  line-height: 0.8;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  animation: ${slideInBottom} 0.5s 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;

  @media ${device.large} {
    margin: 0;
    animation-delay: 3.3s;
  }
`
const Analytics = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 6rem auto;

  div {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary-lighter);
    border-radius: 5px;

    &:nth-child(1) {
      animation: ${slideInBottom} 0.3s 1.2s cubic-bezier(0.23, 1, 0.32, 1) both;
    }

    &:nth-child(2) {
      animation: ${slideInBottom} 0.3s 1.5s cubic-bezier(0.23, 1, 0.32, 1) both;
    }

    &:nth-child(3) {
      animation: ${slideInBottom} 0.3s 1.8s cubic-bezier(0.23, 1, 0.32, 1) both;
    }

    &:not(:last-child) {
      margin-bottom: 1rem;

      @media ${device.medium} {
        margin-bottom: 0;
        margin-right: 1rem;
      }
    }
    @media ${device.large} {
      &:nth-child(1) {
        animation: ${slideInLeftBlurred} 0.3s 0.7s
          cubic-bezier(0.23, 1, 0.32, 1) both;
      }

      &:nth-child(2) {
        animation: ${slideInLeftBlurred} 0.3s 1.1s
          cubic-bezier(0.23, 1, 0.32, 1) both;
      }

      &:nth-child(3) {
        animation: ${slideInLeftBlurred} 0.3s 1.5s
          cubic-bezier(0.23, 1, 0.32, 1) both;
      }
    }

    span {
      font-weight: 700;
      font-size: 3rem;
      margin-bottom: 1rem;
      position: relative;
      span {
        font-size: 1.5rem;
        position: absolute;
        top: 50%;
        left: -1.5rem;
        transform: translateY(-50%);
      }
    }

    p {
      font-size: 1.3rem;
    }

    @media ${device.medium} {
      width: 33.33333%;
    }

    @media ${device.large} {
      padding: 4rem 0;
    }
  }

  @media ${device.medium} {
    flex-direction: row;
  }
  @media ${device.large} {
    grid-column: 1 / span 2;
    margin-top: 7rem;
  }
`

const Header = ({ data }) => {
  let subtitles = []
  data.subtitles.split("/").forEach(el => subtitles.push(el.trim()))

  return (
    <Container className="container">
      <ContentContainer>
        <Headline data-text="Success is the sum of small efforts, repeated day in and day out.">
          Success is the sum of small efforts, repeated day in and day out.
        </Headline>
        <Description>
          I'm a front-end web developer, currently freelancing full-time on
          Upwork, I offer money-back guarantee, premium, after-sales service,
          you can always check my past client’s feedback in the testimonials
          section to make sure you are in good hands.
        </Description>
        <Button to="/#testimonials">Testimonials</Button>
      </ContentContainer>

      <ComputerContainer>
        <Computer />
      </ComputerContainer>

      <Analytics>
        <div>
          <span>
            <span>+</span> 11
          </span>
          <p>Happy Clients</p>
        </div>
        <div>
          <span>
            <span>+</span> 14
          </span>
          <p>Completed Projects</p>
        </div>
        <div>
          <span>
            <span>+</span> 9
          </span>
          <p>Hours Billed</p>
        </div>
      </Analytics>
    </Container>
  )
}

export default Header