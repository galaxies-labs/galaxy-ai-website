import React from "react"
import styled from "@emotion/styled"
import { ButtonBase, Popover, Slider } from "@mui/material"
import { contentWidth, device } from "../../constants"
import { useDispatch, useSelector } from "react-redux"
import { setFluency, setRandomness } from "../../store/write"
import { Close } from "@mui/icons-material"

export default function Setting({ open, onClose }) {
  const { randomness, fluency } = useSelector((s) => s.write.setting)
  const dispatch = useDispatch()
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
          <Close />
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
        <p>Randomness</p>
        <span>
          It is more closer to zero, the more unpredictable the topic of the
          article.
        </span>
        <p>Fluency</p>
        <span>
          It increases the probability of words. Find the best value for your
          writing.
        </span>
      </StyledPopover>

      <Parameter>
        Randomness<span>{randomness}</span>
      </Parameter>
      <StyledSlider
        size='small'
        defaultValue={randomness}
        value={randomness}
        onChange={(e, value) => dispatch(setRandomness(value))}
        max={1.0}
        min={0.1}
        step={0.01}
        classes={{
          rail: "rail",
          track: "track",
          thumb: "thumb",
        }}
      />
      <Parameter>
        Fluency<span>{fluency}</span>
      </Parameter>
      <StyledSlider
        size='small'
        defaultValue={fluency}
        value={fluency}
        onChange={(e, value) => dispatch(setFluency(value))}
        max={100}
        min={0}
        step={1}
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
    color: ${(p) => p.theme.palette.text.default};
    font-size: 16px;
  }
  span {
    font-size: 16px;
    color: ${(p) => p.theme.palette.text.secondary};
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
  color: ${(p) => p.theme.palette.text.default};
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
    color: ${(p) => p.theme.palette.action.background};
  }
  .rail {
    background-color: #eeeeee;
  }
  .track {
    background-color: ${(p) => p.theme.palette.action.background};
  }
  .thumb {
    background-color: ${(p) => p.theme.palette.action.background};
  }
`

const Label = styled.p`
  color: ${(p) => p.theme.palette.text.default};
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
    background-color: ${(p) => p.theme.palette.background.default};
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
