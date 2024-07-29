import type {
  PlasmoCSConfig,
  PlasmoGetOverlayAnchor,
  PlasmoGetStyle,
  PlasmoWatchOverlayAnchor
} from "plasmo"

import Keybord from 'react-simple-keyboard'
import  styleText from 'data-text:react-simple-keyboard/build/css/index.css'
import keyboardStyle from 'data-text:./keyboard.css'
import { useEffect } from "react"

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

export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () =>
  document.querySelector(`div.container`)

const BackButtonOverlay = () => {
  useEffect(() => {
    let header = document.querySelector("div.header")
    header.remove()

    let headerBanner = document.querySelector("div.header__banner")
    headerBanner.remove()

    // let miniKeyboard = document.querySelector('img.keyboardInputInitiator')
    // miniKeyboard.remove()
  })

  let display = "none"
  const goToMemoryWall = () => {
    window.location.href = "https://mlcity.ru"
  }

  return (
    <div
  style={{
    top:"10rem",
    left:"80vw",
    width: "200px",
    height: "100px",
    display: display,
    position: "absolute",

    background: "red"
  }}
  onClick={goToMemoryWall}>
    
  </div>
  )
}


export default BackButtonOverlay
