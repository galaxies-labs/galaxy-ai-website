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
                Do you need ideas and words?
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

      <AboutStoryAI>
        <Label>Galaxy Story AI</Label>
        <Message>
          Galaxy Story AI is an artificial intelligence service that can help
          when you brainstorm ideas and words.
          <br />
          Analyze sentences and words using a GPT-J-based model to generate the
          following sentences.
        </Message>
        <div className='grid-container'>
          <div className='item'>
            <span className='subtitle'>Idea brainstorming</span>
            <span className='desc'>
              We encounter many difficulties during manuscript writing, such as
              lack of ideas and limited vocabulary.
            </span>
            <img alt='ai-1' src='/public/assets/images/story-ai-1.png' />
          </div>
          <div className='item'>
            <span className='subtitle'>Utilizing galaxy AI</span>
            <span className='desc'>
              Galaxy Story AI creates the following manuscript by analyzing the
              context and keywords of the article.
            </span>
            <img
              style={{ width: "300px", marginRight: "-30px" }}
              alt='ai-2'
              src='/public/assets/images/story-ai-2.png'
            />
          </div>
          <div className='item'>
            <span className='subtitle'>GLX Payments for the community</span>
            <span className='desc'>
              GLX paid in Galaxy AI Service will be returned to the community
              pool.
            </span>
            <img alt='ai-3' src='/public/assets/images/story-ai-3.png' />
          </div>
          <div className='item'>
            <span className='subtitle'>Publish your universe</span>
            <span className='desc'>
              Build a unique and expansive universe with Galaxy AI.
            </span>
            <img alt='ai-4' src='/public/assets/images/story-ai-4.png' />
          </div>
        </div>
      </AboutStoryAI>

      <Footer />
    </div>
  )
}

const Message = styled.div`
  text-align: center;
  margin: auto;
  margin-top: 1.5rem;
  color: #222;
  font-size: 1rem;
  line-height: 26px;
`

const Label = styled.div`
  text-align: center;
  margin: auto;
  color: #222222;
  font-size: 3rem;
  font-family: NotoSansKR-Bold;
  @media (max-width: ${device.tablet}) {
    font-size: 2.375rem;
  }
`

const AboutStoryAI = styled.div`
  padding-top: 140px;
  margin: auto;
  margin-bottom: 160px;
  width: 100%;
  max-width: 904px;
  .grid-container {
    margin-top: 50px;
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    .item {
      padding: 40px 45px;
      margin-top: 24px;
      width: calc((904px - 24px) / 2);
      border-radius: 16px;
      background-color: #f7f7f7;
      display: flex;
      flex-direction: column;
      .subtitle {
        margin-bottom: 15px;
        color: #222222;
        font-family: Sans-Black;
        font-size: 26px;
      }
      .desc {
        color: #222222;
        font-size: 16px;
        line-height: 24px;
      }
      :nth-of-type(odd) {
        margin-right: 24px;
      }
      img {
        align-self: flex-end;
        margin-top: 20px;
        width: 255px;
        height: 180px;
        object-fit: contain;
      }
    }
  }
  @media (max-width: 904px) {
    .grid-container {
      flex-direction: column;
      align-items: stretch;
      .item {
        width: auto;
        margin: 24px 24px 0px 24px;
        padding: 30px;
      }
    }
  }
  @media (max-width: ${device.tablet}) {
    padding-top: 100px;
    margin-bottom: 100px;
  }
`

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
