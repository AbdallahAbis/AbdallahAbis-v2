import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import Logo from "../assets/logo.inline.svg"
import { rollInLeft, rollInRight } from "../utils/animations"
import HamburgerMenu from "./inner-containers/hamburgerMenu"
import NavOptions from "./inner-containers/nav-options"

const Nav = styled.nav`
  height: var(--nav);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 5;
`

const LogoContainer = styled(Link)`
  height: 3rem;
  width: 3rem;
  z-index: 10;
  animation: ${rollInLeft} 0.6s ease-out both;

  svg {
    fill: var(--color-main);

    &:hover {
      fill: var(--color-main-lighter);
    }
  }
`

const AnimatedHamburgerMenu = styled(HamburgerMenu)`
  animation: ${rollInRight} 0.6s ease-out both;
`

const Navigation = ({ location }) => {
  const [activeStatus, setActiveStatus] = useState(false)

  return (
    <Nav className="container">
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <AnimatedHamburgerMenu
        setActiveStatus={setActiveStatus}
        activeStatus={activeStatus}
      />
      <NavOptions
        location={location}
        activeStatus={activeStatus}
        setActiveStatus={setActiveStatus}
      />
    </Nav>
  )
}

export default Navigation
