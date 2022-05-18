import React from "react"
import styled from "@emotion/styled"
import { FlatButton } from "../../components/common"
import { device } from "../../constants/common"

export default function Editor() {
  const [title, setTitle] = React.useState("")
  const [desription, setDescription] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const descriptionRef = React.useRef(null)

  let generating = React.useRef(false)

  //trigger after generated text.
  React.useEffect(() => {
    if (descriptionRef.current && generating.current && !loading) {
      descriptionRef.current.focus()
      generating.current = false
    }
  }, [loading, descriptionRef])

  const handleGenerate = () => {
    if (!desription) return
    setLoading(true)
    generating.current = true
    let tm = setTimeout(() => {
      clearTimeout(tm)
      let genText =
        "Hi this is generated Text!. Hi this is generated Text!. Hi this is generated Text!. Hi this is generated Text!. Hi this is generated Text!. Hi this is generated Text!. "
      let cT = descriptionRef.current.value
      let nT = ""
      let ti = 1
      let i = setInterval(() => {
        let toV = cT + "\n\n" + nT + "\n\n"
        nT = genText.substring(0, ti)
        descriptionRef.current.value = toV
        ti++
        if (nT === genText) {
          clearInterval(i)
          setLoading(false)
          setDescription(toV)
        }
      }, 30)
    }, 2000)
  }

  return (
    <Container>
      <StyledTitleInput
        autoFocus
        placeholder='Untitled Story'
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            descriptionRef.current?.focus()
          }
        }}
      />
      <StyledDescription
        disabled={loading}
        ref={descriptionRef}
        placeholder='Type your text'
        value={desription}
        onChange={(e) =>
          setDescription(
            e.target.value.startsWith("\n")
              ? e.target.value.replace("\n", "")
              : e.target.value
          )
        }
      />
      <FlatButton onClick={handleGenerate} loading={loading}>
        Generate
      </FlatButton>
    </Container>
  )
}

const Container = styled.div`
  padding: 50px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 3px 10px 0 #ddd;
  max-width: 740px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 80vh;
  .flat-button {
    margin-top: 40px;
    align-self: flex-end;
    padding: 16px 35px;
    min-width: 140px;
  }
  @media (max-width: ${device.labtop}) {
    flex: 1;
    width: auto;
    box-shadow: none;
    padding: 0px;
  }
  @media (max-width: ${device.labtop}) and (min-width: ${device.tablet}) {
    margin-right: 20px;
  }
  
`

const StyledTitleInput = styled.input`
  font-size: 28px;
  color: #222222;
  padding: 16px 0px;
  border: none;
  font-family: "Sans-Regular";
  letter-spacing: -0.28px;
  border-bottom: 1px solid #eeeeee;
  :focus {
    outline: none;
  }
`

const StyledDescription = styled.textarea`
  flex-grow: 1;
  padding-top: 26px;
  padding-bottom: 26px;
  font-family: "Sans-Regular";
  color: #000;
  font-size: 18px;
  line-height: 26px;
  border: none;
  :focus {
    outline: none;
  }
  :disabled {
    background-color: #fff;
  }
`
