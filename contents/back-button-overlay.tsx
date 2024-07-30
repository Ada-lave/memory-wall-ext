import type {
  PlasmoCSConfig,
  PlasmoGetOverlayAnchor,
  PlasmoGetStyle,
} from "plasmo"

import  styleText from 'data-text:react-simple-keyboard/build/css/index.css'
import { useEffect } from "react"

export const config: PlasmoCSConfig = {
  matches: ["https://pamyat-naroda.ru/*"]
}



export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  return style
}

export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () =>
  document.querySelector(`div.container`)

const BackButtonOverlay = () => {
  useEffect(() => {

    let headerBanner = document.querySelector("div.header__banner")
    headerBanner.remove()

    let moreSeacrhButton = document.querySelector("div.button-more-search")
    moreSeacrhButton.remove()

    let questionLink = document.querySelector("a.btn-how-search")
    questionLink.remove()

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
