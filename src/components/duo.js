import * as React from "react"

import { outer } from "./duo.module.scss"

function Duo({ invert, children }) {
    return (
        <div className={ outer } invert={ invert ? invert : "false" }>{ children }</div>
    )
}

export default Duo