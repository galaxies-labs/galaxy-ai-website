import React from "react"
import styled from "@emotion/styled"

export const Star = () => {
  return (
    <>
      <StyledStar
        top='10%'
        left='15%'
        alt='star-1'
        src='/public/assets/images/object-3.svg'
      />
      <StyledStar
        top='5%'
        left='80%'
        alt='star-2'
        src='/public/assets/images/object-3.svg'
      />
      <StyledStar
        top='70%'
        left='40%'
        alt='star-3'
        src='/public/assets/images/object-3.svg'
      />
    </>
  )
}
export const PlanetA = () => {
  return (
    <StyledPlanetA alt='planet-a' src='/public/assets/images/object-1.png' />
  )
}
export const PlanetB = () => {
  return (
    <StyledPlanetB alt='planet-b' src='/public/assets/images/object-2.png' />
  )
}
export const PlanetC = () => {
  return (
    <StyledPlanetC alt='planet-c' src='/public/assets/images/object-4.png' />
  )
}

export const BallA = styled.div`
  border-radius: 100%;
  background-color: #77daff;
  width: 22px;
  height: 22px;
  position: absolute;
  top: 45%;
  left: 5%;
`
export const BallB = styled.div`
  border-radius: 100%;
  background-color: #77daff;
  width: 36px;
  height: 36px;
  position: absolute;
  top: 75%;
  left: 45%;
`

const StyledPlanetA = styled.img`
  position: absolute;
  top: 10%;
  left: 40%;
  object-fit: contain;
  width: 15%;
  max-width: 150px;
`

const StyledPlanetB = styled.img`
  position: absolute;
  top: 10%;
  right: 10%;
  object-fit: contain;
  width: 10%;
  max-width: 60px;
`

const StyledPlanetC = styled.img`
  position: absolute;
  bottom: 20%;
  right: 10%;
  object-fit: contain;
  width: 22px;
`

const StyledStar = styled.img`
  position: absolute;
  top: ${(p) => p.top};
  left: ${(p) => p.left};
  object-fit: contain;
  width: 80px;
`
