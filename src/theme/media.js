// defining the Media Queries so that I don't have to write it every time.
const device = {
  // Small screens - MOBILE FIRST
  xSmall: `only screen and (max-width: 20em)`, // max-width 320px, xSmall screens
  small: `only screen and (min-width: 40.063em)`, // min-width 641px, small screens
  medium: `only screen and (min-width: 48em)`, // min-width 768px, medium screens
  large: `only screen and (min-width: 64.063em)`, // min-width 1025px, large screens
  xLarge: `only screen and (min-width: 80em)`, // min-width 1280px, xLarge screens
  xxLarge: `only screen and (min-width: 90.063em)`, // min-width 1441px, xLarge screens
  huge: `only screen and (min-width: 120.063em)`, // min-width 1921px, xxLarge screens
}

export default device
