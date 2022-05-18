import React from "react"
import { Link } from "react-router-dom"
import styled from "@emotion/styled"
import AppBar from "../../components/app-bar"
import { BorderButton, Content } from "../../components/common"
import Footer from "../../components/footer"
import { contentWidth, device } from "../../constants/common"
import { BallA, BallB, PlanetA, PlanetB, PlanetC, Star } from "./object"
import Sample from "./sample"

export default function Main() {
  return (
    <div style={{ position: "relative" }}>
      <AppBar absolute />
      {/* assets */}

      <PlanetA />
      <PlanetB />
      <PlanetC />
      <BallA />
      <BallB />
      <Star />

      {/* ---- */}
      <Intro>
        <Content>
          <div className='content-1'>
            <Title>
              Publish
              <br />
              your universe
              <br />
              on WEB<span>3</span>
            </Title>
            <span className='description'>
              Do you need an idea or a word?
              <br />
              AI model supports that you create stories and worldviews.
            </span>
            <Link to='/write'>
              <BorderButton>Try prototype</BorderButton>
            </Link>
          </div>
          <Sample />
        </Content>
      </Intro>
      <Footer />
    </div>
  )
}

const Title = styled.h1`
  font-size: 66px;
  color: #2a267b;
  font-family: "Brlnsdb";
  letter-spacing: 3.3px;
  text-transform: uppercase;
  span {
    font-size: 76px;
    font-family: "Brlnsdb";
  }
  @media (max-width: ${device.tablet}) {
    letter-spacing: 1.6px;
    font-size: 33px;
    line-height: 36px;
    span {
      font-size: 36px;
    }
  }
`

const Intro = styled.div`
  background-color: #f7f7f8;
  width: 100%;
  min-height: 100vh;
  background-position: bottom;
  background-image: url("/public/assets/images/bg-wave.svg");
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  .content {
    min-height: 100%;
    .content-1 {
      margin-right: 10%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .description {
        display: block;
        font-size: 20px;
        color: #888888;
      }
      a {
        margin-top: 60px;
      }
      @media (max-width: ${contentWidth}) {
        margin-right: 5%;
      }
      @media (max-width: ${device.tablet}) {
        a {
          margin-bottom: 50px;
          margin-top: 25px;
        }
        .description {
          font-size: 17px;
        }
      }
    }

    @media (max-width: ${device.labtop}) {
      margin-top: 120px;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`
