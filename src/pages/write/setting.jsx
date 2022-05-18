import React from "react"
import styled from "@emotion/styled"
import { ButtonBase, Popover, Slider } from "@mui/material"
import { contentWidth, device } from "../../constants"


export default function Setting({ open }) {
  const [param1, setParam1] = React.useState(50)
  const [param2, setParam2] = React.useState(30)
  const [tooltip, setTooltip] = React.useState(null)
  return (
    <Container className={open ? "open" : ""}>
      <Label>
        Setting
        <ButtonBase onClick={(e) => setTooltip(e.currentTarget)}>
          <img alt='info' src='/public/assets/images/info.svg' />
        </ButtonBase>
      </Label>
      {/* popover */}

      <Popover
        open={Boolean(tooltip)}
        anchorEl={tooltip}
        onClose={() => setTooltip(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >

      </Popover>

      {/* */}
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
`
const Container = styled.div`
  position: absolute;
  right: 0px;
  width: 220px;
  @media (max-width: ${contentWidth}) {
    position: relative;
  }
  @media (max-width: ${device.tablet}) {
    position: fixed;
    top: 0px;
    left: 100%;
  }
`
