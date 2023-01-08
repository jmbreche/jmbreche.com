import * as React from "react"

import { left } from "./slant.module.scss"
import { right } from "./slant.module.scss"

const Slant = ({ title, subtitle, img, flip, children }) => {
    return (
        <div className={ flip ? right : left }>
            <section>
                <h2>{ title }</h2>
                <p>{ subtitle }</p>
                <span>{ children }</span>

                <div style={{ backgroundImage: `url("/images/` + img + `")` }}></div>
            </section>
        </div>
    )
}

export default Slant