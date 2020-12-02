import { graphql, StaticQuery, Link } from "gatsby"
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import device from "../../theme/media"

const Options = styled.div`
  position: absolute;
  top: var(--nav);
  width: 100%;
  max-height: 0;
  background-color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 700;
  text-align: center;
  overflow: hidden;
  transition: max-height 0.3s;
  display: block;
  box-shadow: 0px 13px 15px -13px #000;

  &.true {
    overflow-y: hidden;
    box-sizing: content-box;
    max-height: ${({ elHeight }) => elHeight + "px"};
    transition: max-height 0.3s;
  }

  ul {
    li {
      padding: 2rem 0;
      transition: opacity 0.2s;

      .active {
        color: var(--color-main);
        opacity: 1;
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
      }
    }
  }

  /* Media Queries */
  @media ${device.large} {
    max-height: unset;
    position: static;
    background-color: unset;
    width: min-content;
    box-shadow: unset;

    display: flex;
    justify-content: space-between;

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;

      li {
        a {
          opacity: 0.7;
          &:hover {
            transition: opacity 0.2s;
            opacity: 1;
          }
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
          margin-right: 0;
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

const NavigationOptions = ({ data, activeStatus, location }) => {
  let options = []
  data.split("/").forEach(el => options.push(el.trim().toLowerCase()))

  const [navHeight, setNavHeight] = useState(0)
  const [activeNavLink, setActiveNavLink] = useState(0)
  const navRef = useRef(null)

  useEffect(() => {
    const isActive = location.hash.slice(1)
    const found = options.filter(el => el.toLowerCase() === isActive)
    setActiveNavLink(found[0] ? found[0] : "home")

    setNavHeight(navRef.current.offsetHeight)
  }, [setNavHeight, location, options])

  return (
    <Options
      className={activeStatus.toString()}
      elHeight={navHeight && navHeight}
    >
      <ul ref={navRef}>
        {options.map((option, i) => (
          <li key={i}>
            <Link
              to={
                option.toLowerCase() === "home"
                  ? "/"
                  : `/#${option.toLowerCase()}`
              }
              className={
                option.toLowerCase() === activeNavLink ? "active" : undefined
              }
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
  )
}

const NavOptions = props => {
  return (
    <StaticQuery
      query={graphql`
        {
          strapi {
            navigation {
              nav
            }
          }
        }
      `}
      render={data => (
        <NavigationOptions data={data.strapi.navigation.nav} {...props} />
      )}
    />
  )
}

export default NavOptions
