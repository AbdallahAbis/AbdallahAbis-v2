import React, { useEffect } from "react"
import styled, { keyframes } from "styled-components"
import Logo from "../assets/logo.inline.svg"

const anim = current => keyframes`
40%{
    stroke-dashoffset: 0;
}
70%{
    stroke-dashoffset: 0;
}
100%{
    stroke-dashoffset: ${current};
}
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100vw;

  svg {
    stroke-width: 0.3px;
    stroke: var(--color-main);
    height: 10%;
    width: 10%;
    fill: none;

    .base {
      stroke-dasharray: 36.26066970825195;
      stroke-dashoffset: 36.26066970825195;
      animation: ${anim(36.26066970825195)} 2s 1s both;
    }
    .left {
      stroke-dasharray: 151.6743621826172;
      stroke-dashoffset: 151.6743621826172;
      animation: ${anim(151.6743621826172)} 2s 1s both;
    }

    .right {
      &:nth-child(1) {
        stroke-dasharray: 87.98909759521484;
        stroke-dashoffset: 87.98909759521484;
        animation: ${anim(87.98909759521484)} 2s 0.5s both;
      }
      &:nth-child(2) {
        stroke-dasharray: 28.201004028320312;
        stroke-dashoffset: 28.201004028320312;
        animation: ${anim(28.201004028320312)} 2s 0.5s both;
      }
      &:nth-child(3) {
        stroke-dasharray: 20.993982315063477;
        stroke-dashoffset: 20.993982315063477;
        animation: ${anim(20.993982315063477)} 2s 0.5s both;
      }
    }
  }
`
const Loader = () => {
  return (
    <Container>
      <Logo />
    </Container>
  )
}

export default Loader
