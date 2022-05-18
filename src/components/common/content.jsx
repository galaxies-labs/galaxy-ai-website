import React from "react"
import styled from "@emotion/styled"
import { contentWidth, device } from "../../constants/common"

export const Content = ({ children }) => {
  return <StyledContent className='content'>{children}</StyledContent>
}

const StyledContent = styled.div`
  width: 100%;
  max-width: 1248px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  @media (max-width: ${contentWidth}) {
    padding: 0px 20px;
  }

  @media (max-width: ${device.tablet}) {
    flex-direction: column;
    align-items: flex-start;
  }
`
