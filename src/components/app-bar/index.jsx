import React from "react"
import styled from "@emotion/styled"
import { contentWidth } from "../../constants"
import { Link } from "react-router-dom"
import { ColorModeContext } from "../../context/colorMode"
import { IconButton, useTheme } from "@mui/material"
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material"

export default function AppBar({ children, absolute, themeEnabled = true }) {
  const theme = useTheme()
  const colorMode = React.useContext(ColorModeContext)

  return (
    <Container absolute={absolute}>
      <Toolbar>
        <Link to='/'>
          <img
            alt='galaxy'
            src={
              "/public/assets/images/" +
              (themeEnabled ? theme.palette.mode : "light") +
              "/label.svg"
            }
          />
        </Link>
        <div>
          {themeEnabled && (
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <LightModeOutlined />
              ) : (
                <DarkModeOutlined />
              )}
            </IconButton>
          )}
          {children}
        </div>
      </Toolbar>
    </Container>
  )
}

const Toolbar = styled.div`
  display: flex;
  width: 100%;
  max-width: 1248px;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  margin: auto;
  @media (max-width: ${contentWidth}) {
    padding: 0px 20px;
  }
  img {
    width: 136px;
    object-fit: contain;
  }
`

const Container = styled.div`
  z-index: 100;
  width: 100%;
  position: ${(p) => (p.absolute ? "absolute" : "static")};
  top: ${(p) => (p.absolute ? "0px" : "")};
  height: 78px;
`
