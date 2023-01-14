import * as React from "react"

import { outer } from "./blurb.module.scss"

function Blurb({ title, invert, children }) {
    return (
        <div className={ outer } invert={ invert ? invert : "false" }>
            <h2>{ title }</h2>

            <section>
                <div>{ children }</div>
            </section>
        </div>
    )
}

export default Blurb