import React from "react"
import { Link } from "react-router-dom"
import styled from "@emotion/styled"
import { contentWidth, device } from "../../constants/common"

export default function Footer() {
  return (
    <Container>
      <span className='company'>GALAXIES LABS</span>
      <Community>
        <a target={"_blank"} href='https://github.com/galaxies-labs'>
          <img alt='github' src='/public/assets/images/github.svg' />
        </a>
        <a target={"_blank"} href='https://medium.com/@galaxyuniverse'>
          <img alt='medium' src='/public/assets/images/medium.svg' />
        </a>
        <a target={"_blank"} href='https://twitter.com/glxuniverse'>
          <img alt='twitter' src='/public/assets/images/twitter.svg' />
        </a>
        <a target={"_blank"} href='https://discord.gg/DkPNtpJQ8C'>
          <img alt='discord' src='/public/assets/images/discord.svg' />
        </a>
      </Community>
    </Container>
  )
}

const Community = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-left: 20px;
    :first-of-type {
      margin-left: 0px;
    }
    img {
      object-fit: contain;
      width: 26px;
      height: 26px;
    }
  }

  @media (max-width: ${device.tablet}) {
    a {
      margin-left: 16px;
      img {
        width: 22px;
        height: 22px;
      }
    }
  }
`

const Container = styled.div`
  align-self: center;
  width: 100%;
  max-width: 1248px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 36px;
  padding-bottom: 36px;
  margin: 30px auto;
  .company {
    font-size: 18px;
    color: #000;
    letter-spacing: 3.6px;
    font-family: Heebo-Bold;
  }

  @media (max-width: ${contentWidth}) {
    margin: 30px 20px 30px 20px;
    width: calc(100% - 40px);
  }
  @media (max-width: ${device.tablet}) {
    padding-top: 24px;
    padding-bottom: 24px;
    margin: 25px auto;
    .company {
      font-size: 14px;
      .img {
        width: 20px;
        height: 20px;
      }
    }
  }
`
