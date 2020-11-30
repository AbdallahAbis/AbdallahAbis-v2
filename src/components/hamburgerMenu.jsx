import React from "react"
import styled from "styled-components"
import device from "../theme/media"

const Hamburger = styled.button`
  font: inherit;
  display: inline-block;
  overflow: visible;
  margin: 0;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, -webkit-filter;
  transition-property: opacity, filter;
  transition-property: opacity, filter, -webkit-filter;
  text-transform: none;
  background-color: transparent;
  z-index: 10;

  & .hamburger-box {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
  }

  & .hamburger-inner {
    display: block;
    margin-top: -2px;
    top: 3px;
    right: 0;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition-duration: 0.4s;
  }

  & .hamburger-inner,
  & .hamburger-inner:after,
  & .hamburger-inner:before {
    display: block;
    content: "";
    position: absolute;
    width: 35px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
    border-radius: 4px;
    background-color: var(--color-text);
  }

  .hamburger-inner:before {
    top: 10px;
    transition: opacity 0.15s 0.4s ease;
  }

  .hamburger-inner:after {
    top: 20px;
    transition: -webkit-transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55),
      -webkit-transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  &.true .hamburger-inner {
    transition-delay: 0.1s;
    -webkit-transform: translate3d(0, 10px, 0) rotate(135deg);
    transform: translate3d(0, 10px, 0) rotate(135deg);
  }

  &.true .hamburger-inner:before {
    transition-delay: 0s;
    opacity: 0;
  }

  &.true .hamburger-inner:after {
    transition-delay: 0.1s;
    -webkit-transform: translate3d(0, -20px, 0) rotate(-270deg);
    transform: translate3d(0, -20px, 0) rotate(-270deg);
  }

  /* Media Queries */
  @media ${device.large} {
    display: none;
  }
`

const HamburgerMenu = ({ setActiveStatus, activeStatus }) => {
  return (
    <Hamburger
      onClick={e => setActiveStatus(!activeStatus)}
      className={activeStatus.toString()}
    >
      <div className="hamburger-box">
        <div className="hamburger-inner"></div>
      </div>
    </Hamburger>
  )
}

export default HamburgerMenu
