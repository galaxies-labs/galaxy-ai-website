import React from "react"
import styled from "@emotion/styled"
import AppBar from "../../components/app-bar"
import { Content } from "../../components/common"
import Footer from "../../components/footer"
import { contentWidth, device } from "../../constants"
import Editor from "./editor"
import Setting from "./setting"
import { IconButton } from "@mui/material"
import { SettingsOutlined } from "@mui/icons-material"

export default function Write() {
  const [settingOpen, setSettingOpen] = React.useState(false)

  return (
    <Page>
      <AppBar>
        <StyledIconButton
          onClick={() => {
            setSettingOpen((v) => !v)
          }}
        >
          <SettingsOutlined />
        </StyledIconButton>
      </AppBar>
      <Content>
        <Editor />

        <Setting open={settingOpen} onClose={() => setSettingOpen(false)} />
      </Content>
      <Footer />
    </Page>
  )
}

const StyledIconButton = styled(IconButton)`
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
      margin-bottom: 30px;
      margin-top: 0px;
    }
  }
  @media (min-width: ${device.labtop}) {
    background-color: ${(p) => p.theme.palette.writePaper};
  }
`
