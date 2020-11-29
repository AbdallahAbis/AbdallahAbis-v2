import { css } from "styled-components"

import eina01RegularWoff from "./Eina01-Regular.woff"
import eina01RegularWoff2 from "./Eina01-Regular.woff2"

import eina01BoldWoff from "./Eina01-Bold.woff"
import eina01BoldWoff2 from "./Eina01-Bold.woff2"

import eina01SemiBoldWoff from "./Eina01-SemiBold.woff"
import eina01SemiBoldWoff2 from "./Eina01-SemiBold.woff2"

const Fonts = css`
  @font-face {
    font-family: "Eina01";
    src: url(${eina01RegularWoff}) format("woff"),
      url(${eina01RegularWoff2}) format("woff2");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Eina01";
    src: url(${eina01SemiBoldWoff}) format("woff"),
      url(${eina01SemiBoldWoff2}) format("woff2");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "Eina01";
    src: url(${eina01BoldWoff}) format("woff"),
      url(${eina01BoldWoff2}) format("woff2");
    font-weight: 700;
    font-style: normal;
  }
`
export default Fonts
