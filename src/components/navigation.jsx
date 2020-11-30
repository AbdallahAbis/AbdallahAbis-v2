import { Link } from "gatsby"
import React, { useEffect, useRef, useState } from "react"
import styled, { keyframes, css } from "styled-components"
import Logo from "../assets/logo.inline.svg"
import device from "../theme/media"

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
const Options = styled.div`
  position: absolute;
  top: var(--nav);
  width: 100%;
  max-height: 0;
  background-color: var(--color-primary-lighter);
  font-size: 1.1rem;
  font-weight: 700;
  text-align: center;
  overflow: hidden;
  transition: max-height 0.3s;
  display: block;

  &.true {
    overflow-y: hidden;
    box-sizing: content-box;
    max-height: ${({ elHeight }) => elHeight + "px"};
    transition: max-height 0.3s;
  }

  li {
    padding: 2rem 0;
    opacity: 0.7;
    transition: opacity 0.2s;

    .active {
      color: var(--color-main);
    }

    button {
      background-color: var(--color-main);
      font-family: var(--font-body);
      font-weight: 700;
      width: max-content;
      border-radius: 7px;
      padding: 1.5rem 3rem;
      font-size: 1.3rem;
      line-height: 0.8;
      letter-spacing: 0.2px;
    }

    &:first-child {
      padding-top: 4rem;
    }
    &:last-child {
      padding-bottom: 4rem;
      opacity: 1;
    }
  }

  /* Media Queries */
  @media ${device.large} {
    max-height: unset;
    position: static;
    background-color: unset;
    width: min-content;

    display: flex;
    justify-content: space-between;

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;

      li {
        &:hover {
          transition: opacity 0.2s;
          opacity: 1;
        }

        &,
        &:first-child,
        &:not(:last-child) {
          padding: 0;
          margin: 0 2.5rem;
        }
        &:last-child {
          padding: 0;
          margin-left: 10rem;
          & {
            button:hover {
              background-color: var(--color-main-lighter);
            }
          }
        }
      }
    }
  }
`

const Navigation = ({ data, location }) => {
  const [activeStatus, setActiveStatus] = useState(false)
  const [navHeight, setNavHeight] = useState(0)
  const [activeNavLink, setActiveNavLink] = useState(0)
  const navRef = useRef(null)
  let options = []
  data.split("/").forEach(el => options.push(el.trim().toLowerCase()))

  useEffect(() => {
    const isActive = location.hash.slice(1)
    const found = options.filter(el => el.toLowerCase() === isActive)
    setActiveNavLink(found[0] ? found[0] : "home")

    setNavHeight(navRef.current.offsetHeight)
  }, [setNavHeight, location])

  return (
    <Nav className="container">
      <Link to="/">
        <Logo />
      </Link>
      <Hamburger
        onClick={e => setActiveStatus(!activeStatus)}
        className={activeStatus}
      >
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </Hamburger>

      <Options className={activeStatus} elHeight={navHeight && navHeight}>
        <ul ref={navRef}>
          {options.map((option, i) => (
            <li key={i}>
              <Link
                to={
                  option.toLowerCase() === "home"
                    ? "/"
                    : `/#${option.toLowerCase()}`
                }
                className={option.toLowerCase() === activeNavLink && "active"}
              >
                {option.toUpperCase()}
              </Link>
            </li>
          ))}
          <li>
            <button>Let's Talk</button>
          </li>
        </ul>
      </Options>
    </Nav>
  )
}

export default Navigation
