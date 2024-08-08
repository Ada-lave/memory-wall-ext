import type {
  PlasmoCSConfig,
  PlasmoGetInlineAnchor,
  PlasmoGetStyle,
} from "plasmo"

import Keybord from 'react-simple-keyboard'
import  styleText from 'data-text:react-simple-keyboard/build/css/index.css'
import keyboardStyle from 'data-text:../styles/keyboard.css'
import { useEffect, useState } from "react"

export const config: PlasmoCSConfig = {
  matches: ["https://pamyat-naroda.ru/*"]
}

const onChange = (input) => {
  const inputNaroda = document.querySelector("#q")
  inputNaroda.value = input
}


export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  style.textContent += keyboardStyle
  return style
}


let layout = {
  default: [
    'ё й ц у к е н г ш щ з х ъ {bksp}',
    'ф ы в а п р о л д ж э',
    'я ч с м и т ь б ю',
    '{space}'
  ],
}

let display = {
  "{alt}": ".?123",
  "{smileys}": "\uD83D\uDE03",
  "{shift}": "⇧",
  "{shiftactivated}": "⇧",
  "{enter}": "return",
  "{bksp}": "⌫",
  "{altright}": ".?123",
  "{downkeyboard}": "🞃",
  "{space}": " ",
  "{default}": "ABC",
}


export const getInlineAnchor: PlasmoGetInlineAnchor = async () => {
  const anchors = document.querySelector(`#q`)
  return anchors
}

const KeybordOverlay = () => {

  const [displayKeyboard, setDisplay] = useState("none")

  const inputNaroda = document.querySelector("#q")
  useEffect(() => {
    document.addEventListener('click',(event) => {
      if (event.target.tagName === "INPUT") {
        setDisplay("flex")
      } else if (event.target.tagName != "PLASMO-CSUI") {
        setDisplay("none")
      }
    })
    document.addEventListener('scroll', () => {
      setDisplay("none")
    })
  }, [])

  return (
    <div
      className="keyboard-container-plasmo"
      style={{
        position: "absolute",
        display: displayKeyboard
      }}>
    <Keybord 
      layout={layout}
      display={display}
      onChange={onChange}/>
  </div>
  )
}


export default KeybordOverlay
