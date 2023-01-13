import * as React from "react"

import { outer } from "./slant.module.scss"

const Slant = ({ title, subtitle, img, pos, children }) => {
    return (
        <div className={ outer }>
            <section position={ pos ? pos : "left" }>
                <h2>{ title }</h2>
                <p>{ subtitle }</p>
                <span>{ children }</span>

                <div style={{ backgroundImage: `url("/images/` + img + `")` }}></div>
            </section>
        </div>
    )
}

export default Slant