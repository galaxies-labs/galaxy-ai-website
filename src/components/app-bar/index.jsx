import React from "react"
import styled from "@emotion/styled"
import { device } from "../../constants/common"

export default function AppBar({ children }) {
  return (
    <Container>
      <Toolbar>
        <span></span>
        <div>{children}</div>
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
  @media (max-width: ${device.tablet}) {
    padding: 0px 40px;
  }
  @media (max-width: ${device.mobile}) {
    padding: 0px 20px;
  }
`

const Container = styled.div`
  width: 100%;
  position: static;
  height: 78px;
`
