import type { PlasmoCSConfig, PlasmoGetInlineAnchor, PlasmoGetOverlayAnchor, PlasmoGetStyle, PlasmoMountShadowHost } from "plasmo";

import styleText from "data-text:../styles/header.css"

export const config: PlasmoCSConfig = {
    matches: ["https://pamyat-naroda.ru/*"]
}

export const getStyle: PlasmoGetStyle = () => {
    const style = document.createElement("style")
    style.textContent = styleText
    return style
  }

export const mountShadowHost: PlasmoMountShadowHost = ({
    shadowHost,
    anchor,
    mountState
  }) => {
    anchor.element.appendChild(shadowHost)
    mountState.observer.disconnect() // OPTIONAL DEMO: stop the observer as needed
  }

const HeaderOverlay = () => {
    return (
        <header>
            <div className="header-wrapper">
                <img src="assets/imgs/logo.png" alt="" className="logo"></img>
                <div className="title-block">
                    <h1 className="header-title">СТЕНА ПАМЯТИ</h1>

                    <h2 className="city-title">Заречный</h2>
                </div>
            </div>
    </header>
    )
}

export default HeaderOverlay