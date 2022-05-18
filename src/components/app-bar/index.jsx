import React from "react"
import styled from "@emotion/styled"
import { contentWidth, device } from "../../constants/common"
import { Link } from "react-router-dom"

export default function AppBar({ children, absolute }) {
  return (
    <Container absolute={absolute}>
      <Toolbar>
        <Link to='/'>
          <span className='title'>GALAXY AI</span>
        </Link>
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
  margin: auto;
  .title {
    font-family: Roboto-Black;
    cursor: pointer;
    font-size: 26px;
    letter-spacing: 1.7px;
    color: #222;
    @media (max-width: ${device.tablet}) {
      font-size: 20px;
    }
  }
  a {
    text-decoration: none;
  }
  @media (max-width: ${contentWidth}) {
    padding: 0px 20px;
  }
`

const Container = styled.div`
  z-index: 100;
  width: 100%;
  position: ${(p) => (p.absolute ? "absolute" : "static")};
  top: ${(p) => (p.absolute ? "0px" : "")};
  height: 78px;
`
