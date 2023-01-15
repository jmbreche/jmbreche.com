import * as React from "react"

import { outer } from "./blurb.module.scss"

function Blurb({ title, invert, watermark, children }) {
    return (
        <div className={ outer } invert={ invert ? invert : "false" }>
            <h2>{ title }</h2>

            { watermark && <img src={ watermark } alt={ watermark }/> }

            <section>
                <div>{ children }</div>
            </section>
        </div>
    )
}

export default Blurb