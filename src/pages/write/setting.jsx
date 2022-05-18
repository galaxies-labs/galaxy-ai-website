import React from "react"
import styled from "@emotion/styled"
import { ButtonBase, Popover, Slider } from "@mui/material"
import { contentWidth, device } from "../../constants"

export default function Setting({ open, onClose }) {
  const [param1, setParam1] = React.useState(50)
  const [param2, setParam2] = React.useState(30)
  const [tooltip, setTooltip] = React.useState(null)

  return (
    <Container open={open}>
      <div className='mobile-background' />

      <Label>
        Setting
        <ButtonBase
          className='setting-popover'
          onClick={(e) => setTooltip(e.currentTarget)}
        >
          <img alt='info' src='/public/assets/images/info.svg' />
        </ButtonBase>
        <ButtonBase className='setting-close' onClick={onClose}>
          <img alt='close' src='/public/assets/images/close.svg' />
        </ButtonBase>
      </Label>

      {/* popover */}
      <StyledPopover
        open={Boolean(tooltip)}
        anchorEl={tooltip}
        onClose={() => setTooltip(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        classes={{ paper: "paper" }}
      >
        <p>Parameter 1</p>
        <span>
          Press the circle button next to Style selection to switch style modes
          at any time .
        </span>
      </StyledPopover>

      <Parameter>
        Parameter 1<span>{param1}</span>
      </Parameter>
      <StyledSlider
        size='small'
        defaultValue={param1}
        value={param1}
        onChange={(e, value) => setParam1(value)}
        max={100}
        min={1}
        classes={{
          rail: "rail",
          track: "track",
          thumb: "thumb",
        }}
      />
      <Parameter>
        Parameter 2<span>{param2}</span>
      </Parameter>
      <StyledSlider
        size='small'
        defaultValue={param2}
        value={param2}
        onChange={(e, value) => setParam2(value)}
        max={100}
        min={1}
        classes={{
          rail: "rail",
          track: "track",
          thumb: "thumb",
        }}
      />
    </Container>
  )
}

const StyledPopover = styled(Popover)`
  p {
    font-family: Sans-SemiBold;
    color: #222222;
    font-size: 16px;
  }
  span {
    font-size: 16px;
    color: #777;
    margin-top: 10px;
  }
  .paper {
    max-width: 260px;
    padding: 10px 20px 20px 20px;
    border-radius: 5px;
  }
`

const Parameter = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: #222222;
  margin: 30px 20px 10px 20px;
  span {
    font-size: 15px;
    color: #7d77ff;
    font-family: Sans-SemiBold;
  }
`

const StyledSlider = styled(Slider)`
  margin: 0px 20px;
  width: calc(100% - 40px) !important;
  svg {
    color: #7d77ff;
  }
  .rail {
    background-color: #eeeeee;
  }
  .track {
    background-color: #7d77ff;
  }
  .thumb {
    background-color: #7d77ff;
  }
`

const Label = styled.p`
  color: #222;
  display: flex;
  justify-content: space-between;
  font-size: 17px;
  font-family: "Sans-SemiBold";
  margin: 18px 20px;

  .setting-close {
    position: absolute;
    right: 20px;
    display: none;
    align-self: flex-end;
    img {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: ${device.tablet}) {
    margin-top: 30px;
    justify-content: flex-start;
    .setting-close {
      display: block;
    }
    .setting-popover {
      margin-left: 6px;
    }
  }
`
const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0px;
  width: 220px;
  @media (max-width: ${contentWidth}) {
    position: relative;
  }
  @media (max-width: ${device.tablet}) {
    position: fixed;
    top: 0px;
    z-index: 110;
    left: ${(p) => (p.open ? "calc(100% - 250px)" : "100%")};
    background-color: #fff;
    width: 250px;
    height: 100vh;
    .mobile-background {
      width: calc(100% - 250px);
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
      position: fixed;
      left: 0;
      display: ${(p) => (p.open ? "block" : "none")};
    }
  }
`
