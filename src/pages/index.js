import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import "./index.module.scss"

import me_img from "../images/Me.png"
import cs_img from "../images/CareShare.svg"
import dcb_img from "../images/DoCollegeBetter.png"
import uofa_img from "../images/UofA.png"

import Banner from "../components/banner"
import Slant from "../components/slant"
import Triad from "../components/triad"

const IndexPage = () => {
    var sections
    var current
    var position
    var destination
    var adjust

    function wheel(event) {
        clearTimeout(adjust)

        let min_distance = 250
        destination = destination - event.deltaY

        if(event.deltaY > 0 && (event.deltaY > 125 || destination < sections[current] - min_distance)) {
            current = (current == sections.length - 1) ? 0 : current + 1

            window.removeEventListener("wheel", wheel)
        } else if(event.deltaY < 0 && (event.deltaY < -125 || destination > sections[current] + min_distance)) {
            current = (current == 0) ? sections.length - 1 : current - 1

            console.log("\n\n")
            console.log("original dest: " + (destination + event.deltaY))
            console.log("new dest: " + destination)
            console.log("section pos: " + sections[current])
            console.log("thresh: " + (sections[current] + min_distance))

            window.removeEventListener("wheel", wheel)
        } else {
            adjust = setTimeout(function() {
                destination = sections[current]
            }, 1000)

            return
        }

        destination = sections[current]

        setTimeout(function() {
            window.addEventListener("wheel", wheel)
        }, 250)
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
        sections = Array.from(document.getElementsByTagName("main")[0].children).map(el => (window.innerHeight - el.offsetHeight) / 2 - el.offsetTop)

        current = 0
        position = 0
        destination = 0

        window.addEventListener("wheel", wheel)

        update()

        return () => {
          window.removeEventListener("wheel", wheel)
          update = undefined
        }
    }, [])

    return (
        <main>
            <Banner intro="Hi, I am" name="Jacob Brecheisen" subtitle="Data Analyst" img={ me_img }/>
            <Slant title="Education" subtitle="University of Arkansas" img="UofA.png" flip="true">This is text about how cool the university of arkansas is.</Slant>
           
            <Triad title="Experience">
                <div>
                    <p>Software Developer<br/><small>CareShare</small></p>
                    <img src={ cs_img } alt={ cs_img }/>
                </div> 

                <div>
                    <p>Data Engineer<br/><small>University of Arkansas</small></p>
                    <img src={ uofa_img } alt={ uofa_img }/>
                </div> 

                <div>
                    <p>Tutor<br/><small>Do College Better</small></p>
                    <img src={ dcb_img } alt={ dcb_img }/>
                </div> 
            </Triad>

            <Slant title="What I've Tested" subtitle="Check out these skills" img="Code.png">This is some test text.</Slant>
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