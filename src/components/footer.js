import * as React from "react"

import { outer } from "./footer.module.scss"

function Footer({ title, children }) {
    return (
        <div className={ outer }>
            <h2>{ title }</h2>

            <section>
                <table>{ children }</table>
            </section>
        </div>
    )
}

export default Footer