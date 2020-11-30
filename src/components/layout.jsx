import React from "react"

import { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet"

import device from "../theme/media"
import Navigation from "./navigation"
import Fonts from "../fonts/fonts"

const GlobalStyle = createGlobalStyle`
${Fonts}

  :root{
  --color-primary: #0B1B2A;
  --color-primary-lighter: #0F1F31;
  --color-primary-light: #17283A;
  --color-text: #DEDEDE;
  --color-main: #5de973;
  --color-main-lighter: #7BED8D;
  --color-main-darker: #3fe559;

  --font-body: 'Eina01', sans-serif;
  /* --font-body: 'Josefin Sans', sans-serif;
  --font-code: 'Roboto Mono', monospace; */

  --nav: 8rem;
   
  }

  *, *::before, *::after{
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }

  html{
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    background-color: var(--color-primary);
    color: var(--color-text);
    font-family: var(--font-body);
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 0.8;
    padding: 0 2.5rem;
  }

  input,
  textarea,
  button,
  select,
  a,
  div {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      outline-color: var(--color-main);
      font-family: var(--font-text);

    }
  
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline:none;
  }

  a {
    color: var(--color-text);
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
  .container{
    margin: 0 auto;
    @media ${device.small}{
      max-width: 640px;
    }
    @media ${device.medium}{
      max-width: 768px;
    }
    @media ${device.large}{
      max-width: 1025px;
    }
    @media ${device.xLarge}{
      max-width: 1280px;
    }
    @media ${device.xxLarge}{
      max-width: 1441px;
    }
    @media ${device.huge}{
      max-width: 1921px;
    }
  }
`

const Layout = ({ location, children }) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&family=Roboto+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Navigation location={location} />
      <main>{children}</main>
    </>
  )
}

export default Layout
