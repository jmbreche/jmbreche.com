import * as React from "react"

import { outer } from "./banner.module.scss"

function Banner({ intro, name, subtitle, img }) {
    return (
        <div id="banner" className={ outer }>
            <section>
                <h1>{ intro } <strong>{ name }</strong></h1>

                <p>{ subtitle }</p>

                <img src={ img } alt={ img }/>
            </section>
        </div>
    )
}

export default Banner