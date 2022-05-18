import React from "react"
import styled from "@emotion/styled"
import AppBar from "../../components/app-bar"
import { Content } from "../../components/common"
import Footer from "../../components/footer"
import { contentWidth, device } from "../../constants"
import Editor from "./editor"
import Setting from "./setting"
import { ButtonBase } from "@mui/material"

export default function Write() {
  const [settingOpen, setSettingOpen] = React.useState(false)

  return (
    <Page>
      <AppBar>
        <MobileSetting onClick={() => setSettingOpen((o) => !o)}>
          <img alt='setting' src='/public/assets/images/setting.svg' />
        </MobileSetting>
      </AppBar>
      <Content>
        <Editor />

        <Setting open={settingOpen} />
      </Content>
      <Footer />
    </Page>
  )
}

const MobileSetting = styled(ButtonBase)`
  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
  @media (min-width: ${device.tablet}) {
    display: none;
  }
`

const Page = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  .content {
    position: relative;
    margin-top: 25px;
    margin-bottom: 50px;
    align-items: stretch;
    flex-grow: 1;
    @media (max-width: ${contentWidth}) {
      justify-content: space-between;
    }
    @media (max-width: ${device.tablet}) {
    margin-bottom: 0px;
      margin-top: 0px;
    }
  }
`
