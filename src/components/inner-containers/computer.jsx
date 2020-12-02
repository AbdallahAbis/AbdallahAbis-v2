import React from "react"
import styled, { keyframes } from "styled-components"
import device from "../../theme/media"
import Typing from "./typing"

// Credit For https://codepen.io/whhhhhhaaaaaaat/pen/rWrREJ

const resize = keyframes`
0%,100%{
    max-height:50%;
}
50%{
    max-height: 100%
}
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .comp {
    width: 100%;

    .monitor {
      margin: 0 auto;
      border-radius: 10px 10px 0px 0px;
      padding: 9px;
      border: solid 1px var(--color-text);
      background-color: black;
      @media ${device.large} {
        width: 100%;
        height: 28rem;
      }
      @media ${device.xLarge} {
        width: 65%;
        height: 28rem;
      }
    }
    .mid {
      float: left;
      height: 100%;
      position: relative;
      background-color: #abadc6;
      width: 50%;
      &.codigo {
        background-color: var(--color-primary-vLight);
      }
    }
    .site {
      overflow: hidden;
      position: absolute;
      width: 85%;
      height: 85%;
      bottom: 50%;
      right: 0;
      transform: translateY(50%);
      .topbar {
        width: 100%;
        height: 3.7%;
      }
      .cerrar {
        width: 100%;
        padding: 3px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border-radius: 4px 4px 0px 0px;
        background-color: #afa895;
        & > div {
          display: inline-block;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background: white;
          margin: 0px 1px;
        }
      }
      .inhead {
        padding: 2px;
        height: 2%;
        background-color: #ddd8cf;
        .item {
          width: 10px;
          height: 1px;
          background-color: #d1c9bf;
          margin: 0 1px;
          display: block;
          float: left;
        }
      }
    }
    .txr {
      text-align: right;
      .item {
        float: right;
      }
    }
    .inslid {
      width: 100%;
      height: 15%;
      background-color: #efebe2;
    }
    .incont {
      padding-top: 10px;
      background: #fefaf0;
      height: 77.8%;
      .item {
        background-color: #d1c9bf;
        width: 53px;
        height: 1.5px;
        display: block;
        margin: 0 auto;
        margin-top: 1px;
        &:nth-child(1) {
          width: 15%;
          height: 2px;
        }
        &:nth-child(2) {
          margin-top: 3px;
          width: 20%;
        }
        &:nth-child(3) {
          width: 10%;
        }
        &:nth-child(4) {
          width: 8%;
        }
      }
      .wid {
        width: 100%;
        padding: 8px 1px;
        height: 88%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, minmax(50%, 80%));
        grid-gap: 3%;
        justify-items: center;
        .itwid {
          width: 85%;
          float: left;
          max-height: 50%;
          padding: 0px 3px;
          animation: ${resize} 5s ease-in-out infinite;
          & > div {
            width: 100%;
            height: 100%;
            background-color: #f5f1e6;
            position: relative;
            .contfoot {
              position: absolute;
              bottom: 0;
              left: 0;
              height: 6px;
              width: 100%;
              background-color: #ebe5dc;
            }
          }
        }
      }
      .infoot {
        background-color: #efebe2;
        height: 5%;
        width: 100%;
      }
    }
    .codigo {
      padding: 3%;
    }

    .base {
      height: 12px;
      background: var(--color-text);
      display: block;
      margin: 0 auto;
      border-radius: 0px 0px 6px 6px;

      @media ${device.large} {
        width: 110%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
      @media ${device.xLarge} {
        width: 75%;
      }
    }
  }
`

const Computer = () => (
  <Container>
    <div className="comp">
      <div className="monitor">
        <div className="mid">
          <div className="site">
            <div className="topbar">
              <div className="cerrar">
                <div className="circl"></div>
                <div className="circl"></div>
                <div className="circl"></div>
              </div>
            </div>
            <div className="inhead">
              <div className="mid">
                <div className="item"></div>
              </div>
              <div className="mid txr">
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
              </div>
            </div>
            <div className="inslid"></div>
            <div className="incont">
              <div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
              </div>
              <div className="wid">
                <div className="itwid">
                  <div>
                    <div className="contfoot"></div>
                  </div>
                </div>
                <div className="itwid">
                  <div>
                    <div className="contfoot"></div>
                  </div>
                </div>
                <div className="itwid">
                  <div>
                    <div className="contfoot"></div>
                  </div>
                </div>
                <div className="itwid">
                  <div>
                    <div className="contfoot"></div>
                  </div>
                </div>
                <div className="itwid">
                  <div>
                    <div className="contfoot"></div>
                  </div>
                </div>
                <div className="itwid">
                  <div>
                    <div className="contfoot"></div>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="infoot"></div>
            </div>
          </div>
        </div>
        <div className="mid codigo">
          <Typing />
        </div>
      </div>
      <div className="base"></div>
    </div>
  </Container>
)

export default Computer
