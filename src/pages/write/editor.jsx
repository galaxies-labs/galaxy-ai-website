import React from "react"
import styled from "@emotion/styled"
import { FlatButton } from "../../components/common"
import { device } from "../../constants"
import { genHtmlByText, replaceHtmlTags } from "../../utils"
import axios from "../../api/axios"
import { useSelector } from "react-redux"
import { Box } from "@mui/material"

export default function Editor() {
  const writeParams = useSelector((s) => s.write.setting)
  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")
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

  /**
   *
   * @param {String} text
   * @param {Boolean} nextPara
   * @param {Function} cb
   */
  const updateGeneratedText = (text, nextPara, cb) => {
    let doc = genHtmlByText(descriptionRef.current.innerHTML)
    let body = doc.getElementsByTagName("body").item(0)

    let np
    if (nextPara) {
      np = document.createElement("p")
      body.appendChild(np)
    } else {
      np = body.childNodes.item(body.childNodes.length - 1)
    }

    let defaultText = np.innerText || ""
    if (defaultText) {
      defaultText = defaultText.trim()
      defaultText = defaultText + " "
    }

    let ti = 1
    let i = setInterval(() => {
      np.innerText = defaultText + text.substring(0, ti)
      ti++
      descriptionRef.current.innerHTML = body.innerHTML
      if (np.innerText === defaultText + text) {
        clearInterval(i)
        setDescription(body.innerHTML)
        //focus cursor
        getSelection().collapse(descriptionRef.current.lastElementChild, 1)
        cb()
      }
    }, 30)
  }

  const handleGenerate = () => {
    if (!descriptionRef.current) return

    let doc = genHtmlByText(descriptionRef.current.innerHTML)
    let body = doc.getElementsByTagName("body").item(0)

    if (!body.lastElementChild) return

    let genNextParagraph = false
    if (!body.lastElementChild.textContent) {
      genNextParagraph = true
      //remove all empty node
      descriptionRef.current.innerHTML =
        descriptionRef.current.innerHTML.replace(
          new RegExp("<p><br></p>|<p></p>", "g"),
          ""
        )
      setDescription(descriptionRef.current.innerHTML)
      doc = genHtmlByText(descriptionRef.current.innerHTML)
      body = doc.getElementsByTagName("body").item(0)
    }

    setLoading(true)
    generating.current = true

    let input = ""

    //split paragraph for 50 max words.
    let childIndex = body.childNodes.length - 1
    while (childIndex >= 0) {
      let text = body.childNodes.item(childIndex).textContent

      if (text) {
        text = text.replace(/  +/g, " ")
      }

      if ((text + " " + input).split(" ").length >= 50) {
        if (childIndex === body.childNodes.length - 1) {
          input = text.split(" ").slice(0, 49).join(" ")
        }
        break
      }
      input = text + " " + input

      childIndex--
    }

    axios
      .post("/gen-text", {
        text: input.trim(),
        datas: writeParams,
      })
      .then((res) =>
        updateGeneratedText(res.data.data, genNextParagraph, () => {
          setLoading(false)
        })
      )
      .catch((e) => {
        alert(e.message)
        setLoading(false)
      })
  }

  /**
   * @param {React.KeyboardEvent<HTMLDivElement>} e
   */
  const handleKeyDownCapture = (e) => {
    if (e.key === "Backspace" && !replaceHtmlTags(description)) {
      let doc = genHtmlByText(description)
      let nodeLength = doc.getElementsByTagName("body").item(0)
        ?.childNodes.length
      if (nodeLength === 1) {
        e.preventDefault()
      }
    }
  }

  const handleFocus = () => {
    if (!description) {
      setDescription("<p><br></p>")
      descriptionRef.current.innerHTML = "<p><br></p>"
    }
  }

  const handleBlur = () => {
    if (!replaceHtmlTags(description)) {
      setDescription("")
      descriptionRef.current.innerHTML = ""
    }
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
        role='textbox'
        aria-multiline
        contentEditable={!loading}
        ref={descriptionRef}
        placeholder='Type your text'
        onInput={(e) => setDescription(e.currentTarget.innerHTML)}
        onKeyDownCapture={handleKeyDownCapture}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <FlatButton onClick={handleGenerate} loading={loading}>
        Generate
      </FlatButton>
    </Container>
  )
}

const Container = styled(Box)`
  padding: 50px;
  border-radius: 10px;
  box-shadow: ${(p) =>
    p.theme.palette.mode === "dark" ? "none" : "0px 3px 10px 0 #ddd"};
  background-color: ${(p) => p.theme.palette.background.default};
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
  border-bottom: 1px solid ${(p) => p.theme.palette.divider};
  background-color: transparent;
  color: ${(p) => p.theme.palette.text.default};
  :focus {
    outline: none;
  }
  ::placeholder {
    color: ${(p) => p.theme.palette.text.disabled};
  }
`

const StyledDescription = styled.div`
  position: relative;
  flex-grow: 1;
  word-wrap: break-word;
  padding-top: 26px;
  padding-bottom: 26px;
  font-family: "Sans-Regular";
  color: ${(p) => p.theme.palette.text.default};
  font-size: 18px;
  line-height: 26px;
  border: none;
  :focus {
    outline: none;
  }
  :disabled {
    background-color: #fff;
  }
  p {
    :first-of-type {
      margin-top: 0px;
    }
  }
  :empty:after {
    content: attr(placeholder) !important;
    font-style: italic;
    position: absolute;
    color: ${(p) => p.theme.palette.text.disabled};
    left: 0;
    top: 0;
    white-space: pre;
    padding: inherit;
    margin: inherit;
  }
`
