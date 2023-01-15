import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import "./education.module.scss"

import Back from "../components/back"

const Education = () => {
    var position = 0
    var destination = 0

    var current
    var sections

    function scroll(amount) {
        let min_distance = 250
        destination = destination - amount

        if(Math.abs(amount) > 125 || destination < sections[current] - min_distance || destination > sections[current] + min_distance) {
            current = (current + ((amount < 0) ? sections.length - 1 : 1)) % sections.length

            destination = sections[current]

            window.removeEventListener("wheel", wheel)
    
            setTimeout(function() {
                window.addEventListener("wheel", wheel)
            }, 250)
        }
    }

    function wheel(event) {
        scroll(event.deltaY)
    }

    function keydown(event) {
        if(event.keyCode == 38) {
            scroll(-150)
        } else if(event.keyCode == 32 || event.keyCode == 40) {
            scroll(150)
        }
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
        current = new URLSearchParams(window.location.search).get("section") || 0
        sections = Array.from(document.getElementsByTagName("main")[0].children).map(el => (window.innerHeight - el.offsetHeight) / 2 - el.offsetTop)

        destination = sections[current]
        position = sections[current]

        window.addEventListener("wheel", wheel)
        window.addEventListener("keydown", keydown)

        update()

        return () => {
          window.removeEventListener("wheel", wheel)
          window.removeEventListener("keydown", keydown)
          update = undefined
        }
    }, [])

    return (
        <>
            <main>
                
            </main>

            <Back to="/?section=3"/>
        </>
    )
}

export const Head = () => (
    <>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>

        <link rel="icon" type="image/x-icon" href="static/logo.ico"/>

        <title>Experience</title>
    </>
)

export default Education