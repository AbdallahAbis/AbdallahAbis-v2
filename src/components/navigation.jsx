import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import Logo from "../assets/logo.inline.svg"
import HamburgerMenu from "./hamburgerMenu"
import NavOptions from "./nav-options"

const Nav = styled.nav`
  height: var(--nav);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  a:first-child {
    height: 3rem;
    width: 3rem;
    z-index: 10;
    svg {
      fill: var(--color-main);

      &:hover {
        fill: var(--color-main-lighter);
      }
    }
  }
`

const Navigation = ({ location }) => {
  const [activeStatus, setActiveStatus] = useState(false)

  return (
    <Nav className="container">
      <Link to="/">
        <Logo />
      </Link>
      <HamburgerMenu
        setActiveStatus={setActiveStatus}
        activeStatus={activeStatus}
      />
      <NavOptions location={location} activeStatus={activeStatus} />
    </Nav>
  )
}

export default Navigation
