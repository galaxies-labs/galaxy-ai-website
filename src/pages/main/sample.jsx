import React from "react"
import styled from "@emotion/styled"
import { FlatButton } from "../../components/common"
import { device } from "../../constants"

const generated =
  "How does it work?  This part of this article will deal with the technical details of how to create a blockchain that could be used to develop a decentralized multi-user virtual world."

export default function Sample() {
  const [clicked, setClicked] = React.useState(false)

  const genTextRef = React.useRef(null)
  const buttonRef = React.useRef(null)

  React.useEffect(() => {
    if (!buttonRef.current || clicked) return
    let button = buttonRef.current

    let tm = setTimeout(() => {
      button.className = button.className + " flat-button-animi"

      clearTimeout(tm)
      tm = setTimeout(() => {
        button.className = button.className.replace("flat-button-animi", "")
        setClicked(true)
      }, 500)
    }, 500)
    return () => {
      clearTimeout(tm)
    }
  }, [buttonRef, clicked])

  React.useEffect(() => {
    if (!clicked || !genTextRef.current) return

    let tl = 0

    let tm = setInterval(() => {
      if (generated.length > tl) {
        tl = tl + 1
        genTextRef.current.innerHTML = generated.substring(0, tl)
      } else {
        setClicked(false)
      }
    }, 30)

    return () => {
      clearInterval(tm)
    }
  }, [clicked])

  return (
    <Container>
      <Label>Typed:</Label>
      <span>
        It serves as the basis for the protocol that can develop into a
        metaverse where individual worldviews are gathered, and serves as the
        backbone of the decentralized metaverse.
      </span>
      <Label>Generated:</Label>
      <span ref={genTextRef} />
      <FlatButton innerRef={buttonRef} disabled>
        Generate
      </FlatButton>
    </Container>
  )
}

const Label = styled.p`
  font-size: 17px;
  color: #222222;
  margin-top: 0px;
  font-family: "Sans-SemiBold";
  :last-of-type {
    margin-top: 40px;
  }
`

const Container = styled.div`
  min-height: 33vh;
  background-color: #ffffff;
  padding: 39px 30px 30px 39px;
  border-radius: 10px;
  box-shadow: 0px 3px 10px 0 #ddd;
  flex: 1;
  display: flex;
  flex-direction: column;
  .flat-button {
    margin-top: 30px;
    align-self: end;
    transform: border-color 0.5s, background-color 0.5s, color 0.5s;
  }
  .flat-button-animi {
    background-color: #fff;
    border: 1px solid #7d77ff;
    color: #7d77ff;
    box-shadow: 0px 0.5px 2px 0 #ddd;
    padding-top: 9px;
  }
  span {
    color: #888888;
    font-size: 16px;
    line-height: 24px;
    :last-of-type {
      display: block;
      color: #222222;
      flex: 1;
    }
  }
  @media (max-width: ${device.tablet}) {
    padding: 30px 20px;
    border-radius: 5px;
    margin-bottom: 60px;
  }
`
