import type {
  PlasmoCSConfig,
  PlasmoGetOverlayAnchor,
  PlasmoGetStyle,
} from "plasmo"

import  styleText from 'data-text:react-simple-keyboard/build/css/index.css'
import { useEffect } from "react"
import cssText from "data-text:~style.css"


export const config: PlasmoCSConfig = {
  matches: ["https://pamyat-naroda.ru/*"]
}
 
export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}



export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () =>
  document.querySelector(`div.container`)

const BackButtonOverlay = () => {

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
  }}
  className="bg-red-500"
  onClick={goToMemoryWall}>
    
  </div>
  )
}


export default BackButtonOverlay
