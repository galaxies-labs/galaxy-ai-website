import React from "react"
import styled from "@emotion/styled"
import { contentWidth, device } from "../../constants"
import { useTheme } from "@mui/system"

export default function Footer({ themeEnabled = true }) {
  const theme = useTheme()

  const getIconPath = (prefix) => {
    return `/public/assets/images/${
      themeEnabled ? theme.palette.mode : "light"
    }/${prefix}.svg`
  }

  return (
    <Container themeEnabled={themeEnabled}>
      <span className='company'>GALAXIES LABS</span>
      <Community>
        <a target={"_blank"} href='https://github.com/galaxies-labs'>
          <img alt='github' src={getIconPath("github")} />
        </a>
        <a target={"_blank"} href='https://medium.com/@galaxyuniverse'>
          <img alt='medium' src={getIconPath("medium")} />
        </a>
        <a target={"_blank"} href='https://twitter.com/glxuniverse'>
          <img alt='twitter' src={getIconPath("twitter")} />
        </a>
        <a target={"_blank"} href='https://discord.gg/DkPNtpJQ8C'>
          <img alt='discord' src={getIconPath("discord")} />
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
  border-top: 1px solid ${(p) => p.theme.palette.divider};
  justify-content: space-between;
  padding-top: 36px;
  padding-bottom: 36px;
  margin: 0px auto;
  .company {
    font-size: 18px;
    color: ${(p) =>
      p.themeEnabled ? p.theme.palette.text.default : "#000"};
    letter-spacing: 3.6px;
    font-family: Heebo-Bold;
  }

  @media (max-width: ${contentWidth}) {
    margin: 30px 20px 0px 20px;
    width: calc(100% - 40px);
  }
  @media (max-width: ${device.tablet}) {
    padding-top: 24px;
    padding-bottom: 24px;
    .company {
      font-size: 14px;
      .img {
        width: 20px;
        height: 20px;
      }
    }
  }
`
