import React from "react"
import { Link } from "react-router-dom"
import styled from "@emotion/styled"
import AppBar from "../../components/app-bar"
import { BorderButton, Content } from "../../components/common"
import Footer from "../../components/footer"
import { contentWidth, device } from "../../constants"
import Sample from "./sample"

export default function Main() {
  return (
    <div style={{ position: "relative" }}>
      <AppBar absolute />

      <Intro>
        <Background>
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
              <Link to='/write' className='flat-button-link'>
                <BorderButton>Try prototype</BorderButton>
              </Link>
            </div>
            <Sample />
          </Content>
        </Background>
      </Intro>

      <Footer />
    </div>
  )
}

const Background = styled.div`
  background-image: url("/public/assets/images/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  max-width: 1920px;
  @media (max-width: ${device.labtop}) {
    background-image: image-set(
      url("/public/assets/images/bg-m@1x.png") 1x,
      url("/public/assets/images/bg-m@2x.png") 2x,
      url("/public/assets/images/bg-m@3x.png") 3x
    );
    background-size: 100vw auto;
  }
`

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
  z-index: 10;
  background-color: #f7f7f8;
  width: 100%;
  min-height: 100vh;
  background-position: bottom;
  background-image: url("/public/assets/images/bg-wave.svg");
  display: flex;
  background-repeat: no-repeat;
  justify-content: center;
  .content {
    min-height: 100vh;
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
      .flat-button-link {
        margin-top: 60px;
      }
      @media (max-width: ${contentWidth}) {
        margin-right: 5%;
      }
      @media (max-width: ${device.tablet}) {
        .flat-button-link {
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
      .flat-button-link {
        margin-bottom: 50px;
      }
    }
  }
`
