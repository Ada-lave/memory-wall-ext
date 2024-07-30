import type {
  PlasmoCSConfig,
  PlasmoGetInlineAnchor,
  PlasmoGetStyle,
  PlasmoWatchOverlayAnchor,
  PlasmoGetRootContainer 
} from "plasmo"

import Keybord from 'react-simple-keyboard'
import  styleText from 'data-text:react-simple-keyboard/build/css/index.css'
import keyboardStyle from 'data-text:./keyboard.css'
import { useEffect, useState } from "react"

export const config: PlasmoCSConfig = {
  matches: ["https://pamyat-naroda.ru/*"]
}

export const onChange = (input) => {
  const inputNaroda = document.querySelector("#q")
  inputNaroda.value = input
  console.log(input)
}




export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  style.textContent += keyboardStyle
  return style
}

export const watchOverlayAnchor: PlasmoWatchOverlayAnchor = (
  updatePosition
) => {
  const interval = setInterval(() => {
    updatePosition()
  }, 420)

  return () => clearInterval(interval)
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

export const ResizeKeyboard = () => {
  console.log("RESIZED")
}

export const getInlineAnchor: PlasmoGetInlineAnchor = async () => {
  const anchors = document.querySelector(`#q`)
  return anchors
}

const KeybordOverlay = () => {
  const [displayKeyboard, setDisplay] = useState("none")

  const inputNaroda = document.querySelector("html")

  inputNaroda.addEventListener('click',async (e:any) => {
    const el = await getInlineAnchor()
    const plasmoContainer = await document.querySelector('plasmo-csui')
    if(e.composedPath().includes(el)) {
      setDisplay("flex")
    } else { 
      let arr = await e.composedPath().forEach(async (val: Element) =>  {
        let classButton = await val.classList?.contains('hg-button')
        let classStandart = await val.classList?.contains('hg-standardBtn')
        if( classButton || classStandart ) {
          setDisplay("flex")
          return true
        } 
      })
      if (arr) {
        setDisplay("flex")
      } else {
        setDisplay("none")
      }
    }
  })

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
