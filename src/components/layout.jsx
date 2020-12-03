import React, { useEffect } from "react"

import { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet"

import device from "../theme/media"
import Navigation from "./navigation"
import Fonts from "../fonts/fonts"
import Particles from "react-tsparticles"
import sal from "sal.js"
import "sal.js/dist/sal.css"

const GlobalStyle = createGlobalStyle`
${Fonts}

  :root{
  --color-primary: #070f17;
  --color-primary-darker: #050a0f;
  --color-primary-lighter: #08121b;
  --color-primary-light: #09141f;
  --color-primary-vLight: #0d1c2b;
  --color-text: #DEDEDE;
  --color-main: #5de973;
  --color-main-lighter: #7BED8D;
  --color-main-darker: #3fe559;
  --color-main-dark: #35e450;
  --color-code: #fbb053;


  --font-body: 'Eina01', sans-serif;
  --font-code: 'firaCode', sans-serif;

  --nav: 8rem;
   
  }

  *, *:before, *:after{
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

  .tsparticles, #tsparticles{
    position: fixed;
    top:0;
    left:0;
    height: 100%;
    width: 100%;
    z-index: -10;
  }
`

const Layout = ({ location, children }) => {
  useEffect(() => {
    sal()
  })
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
      <Particles
        className="tsparticles"
        options={{
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#0d1c2b",
            },
            links: {
              color: "#0d1c2b",
              distance: 150,
              enable: true,
              opacity: 0.7,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    </>
  )
}

export default Layout
