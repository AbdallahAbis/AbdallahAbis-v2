import { Link } from "gatsby"
import React, { forwardRef } from "react"
import styled from "styled-components"
import device from "../../theme/media"
import { shiny } from "../../utils/animations"

const Button = styled(Link)`
  font-family: var(--font-body);
  font-weight: 600;
  width: max-content;
  border-radius: 2px;
  padding: 1.5rem 3rem;
  font-size: 1.3rem;
  line-height: 0.8;
  display: block;
  letter-spacing: 0.2px;
  color: var(--color-primary);
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  color: var(--color-primary);
  border: none;
  background: linear-gradient(
    0deg,
    var(--color-main) 0%,
    var(--color-main-darker) 100%
  );
  transition: transform ease-in 0.2s;

  &:active {
    transform: scale(0.95);
  }

  &:before {
    position: absolute;
    content: "";
    display: inline-block;
    top: -180px;
    left: 0;
    width: 30px;
    height: 100%;
    background-color: #fff;
    animation: ${shiny} 4s ease-in-out infinite;
  }

  @media (hover: hover) {
    &:after {
      position: absolute;
      content: " ";
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        0deg,
        var(--color-main) 0%,
        var(--color-main-darker) 100%
      );
      transition: transform 0.5s ease;
    }

    &:hover:after {
      transform: scale(2) rotate(180deg);
    }

    &:hover:before {
      animation: unset;
    }

    &:hover {
      background: var(--color-primary-vLight);
    }
  }

  @media ${device.large} {
    margin: 0;
  }
`

const CustomButton = forwardRef((props, ref) => {
  const { children, ...other } = props
  return (
    <Button ref={ref} {...other}>
      {children}
    </Button>
  )
})

export default CustomButton
