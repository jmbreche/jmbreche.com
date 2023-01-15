import * as React from "react"

import { Link } from "gatsby"

import { outer } from "./back.module.scss"

const Back = ({ to }) => {
    return (
        <Link to={ to }><button className={ outer }>Go back</button></Link>
    )
}

export default Back