import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import "./index.module.scss"

import me_img from "../images/Me.png"

import Banner from "../components/banner"
import Slant from "../components/slant"

const IndexPage = () => {
    var sections
    var current_section
    var position
    var destination

    function wheel(event) {
        if(event.deltaY < 0) {
            current_section--
        } else if(event.deltaY > 0) {
            current_section++
        }

        if(current_section < 0) {
            current_section = sections.length - 1
        } else if(current_section > sections.length - 1) {
            current_section = 0
        }

        destination = ((window.innerHeight - sections[current_section].offsetHeight) / 2 - sections[current_section].offsetTop)
    }

    function update() {
        let speed = Math.abs(position - destination) / 3

        if(speed < 25 / 3) {
            position = destination
        } else {
            position += (position < destination) ? speed : -speed
        }

        document.getElementsByTagName("body")[0].style.top = position + "px"

        setTimeout(update, 10)
    }

    React.useEffect(() => {
        position = (window.innerHeight - document.getElementById("banner").offsetHeight) / 2
        destination = position
        sections = document.getElementsByTagName("main")[0].children
        current_section = 0

        document.getElementsByTagName("body")[0].style.top = position + "px"

        window.addEventListener("wheel", wheel)

        update()

        return () => {
          window.removeEventListener("wheel", wheel)
        }
    }, [])

    return (
        <main>
            <Banner intro="Hi, I am" name="Jacob Brecheisen" subtitle="Data Analyst" img={ me_img }/>
            <Slant title="What I've Tested" subtitle="University of Testing" img="CareShare.svg">This is some test text.</Slant>
            <Slant title="Education" subtitle="University of Arkansas" img="UofA.png" flip="true">This is text about how cool the university of arkansas is.</Slant>
        </main>
    )
}

export const Head = () => (
    <>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>

        <link rel="icon" type="image/x-icon" href="static/logo.ico"/>

        <title>Welcome</title>
    </>
)

export default IndexPage