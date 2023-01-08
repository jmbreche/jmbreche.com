import * as React from "react"

import { outer } from "./triad.module.scss"

function Triad({ title, children }) {
    return (
        <div className={ outer }>
            <h2>{ title }</h2>

            <section>
                { children }
            </section>
        </div>
    )
}

export default Triad