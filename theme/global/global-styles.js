import { createGlobalStyle } from 'styled-components';
import device from '../media';

const GlobalStyles = createGlobalStyle`

/* Global Variables */
  :root{
  --color-primary: #090117;
  --color-primary-diff-1: #050c1e;
  --color-primary-diff-2: #09141f;
  --color-primary-diff-3: #0d1c2b;
  --color-text: #dedede;
  --color-main: #1cd438;
  --color-main-lighter: #27e246;
  --color-main-darker: #19bd33;
  --color-primary-diff-3-alpha: 13, 28, 43;


  --font-body: 'Eina01', sans-serif;
  --font-code: 'firaCode', sans-serif;
  --font-circular: 'circular', sans-serif;
  --font-nova: 'novaSoft', sans-serif;

  --nav: 8rem;
  --container-padding: 0 2.5rem;

  --animation-duration: 0.5s;
   
  }
[data-theme="light"] {
	--color-primary: #f7f9fb;
	--color-primary-diff-1: #edf1f6;
	--color-primary-diff-2: #e9eff4;
	--color-primary-diff-3: #e6ecf2;
	--color-text: #090117;
	--color-main: #19bd33;
	--color-main-lighter: #1ac634;
	--color-main-darker: #18b432;
	--color-primary-diff-3-alpha: 230, 236, 242;
}

/* Presets */
  *, *:before, *:after{
    box-sizing: inherit;
    padding: 0;
	  margin: 0;
  }

::-moz-selection, ::selection {
  color: var(--color-primary);
  background: var(--color-main);
}

/* Global Styles */
  html{
    font-size: 62.5%;
    box-sizing: border-box;
    overflow-x: hidden;
	  scroll-behavior:smooth;

	}

  body {
    background-color: var(--color-primary);
    color: var(--color-text);
    font-family: var(--font-body);
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 0.8;
	  min-height: 100vh;
	  position: relative;
	  overflow: inherit;
  }


  main{
      text-align: center;
       @media ${device.large} {
        text-align: left;
       }
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

  section{
    min-height: 90vh;
	height: auto;
	padding-top: var(--nav);
	&:not(:first-child){
	padding-top: 10rem;
	}
  }

  /* Global Class Names */
 .container{
	padding: var(--container-padding);
  }
.innerContainer{
 	margin: 0 auto;
    max-width: 360px;
	width: 100%;
    
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
  

  /* Set Particles Background   */
  .tsparticles, #tsparticles{
    position: fixed;
    top:0;
    left:0;
    height: 100%;
    width: 100%;
	z-index: -10;
  }

/* Animated Elements Global Style */
 [data-animate]{
	  opacity: 0;
  }
`;

export default GlobalStyles;
