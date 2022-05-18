import { CircularProgress } from "@mui/material"
import React from "react"
import styled from "@emotion/styled"
import { device } from "../../constants/common"

export const BorderButton = ({ children, onClick }) => {
  return (
    <StyledBorderButton className='border-button' onClick={onClick}>
      {children}
    </StyledBorderButton>
  )
}

export const FlatButton = ({
  loading,
  innerRef,
  children,
  onClick,
  disabled,
}) => {
  return (
    <StyledFlatButton
      ref={innerRef}
      disabled={disabled || loading}
      className={"flat-button"}
      onClick={onClick}
    >
      {loading ? <CircularProgress size={18} color='inherit' /> : children}
    </StyledFlatButton>
  )
}

const StyledFlatButton = styled.button`
  background-color: #7d77ff;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  color: #ffffff;
  font-family: "Sans-SemiBold";
  border: none;
  padding: 10px 20px;
  :disabled {
    cursor: wait;
  }
`

const StyledBorderButton = styled.button`
  min-height: 60px;
  cursor: pointer;
  background-color: #5954cc;
  border-radius: 30px;
  text-align: center;
  color: #fff;
  font-family: "Sans-SemiBold";
  font-size: 20px;
  padding: 20px 50px;
  border: none;
  @media (max-width: ${device.tablet}) {
    font-size: 17px;
    min-height: auto;
    padding: 12px 33px;
  }
`
