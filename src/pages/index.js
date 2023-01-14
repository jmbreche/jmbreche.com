import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import "./index.module.scss"

import { Link } from "gatsby"

import me_img from "../images/Me.png"
import cs_img from "../images/CareShare.svg"
import dcb_img from "../images/DoCollegeBetter.png"
import uofa_img from "../images/UofA.png"

import Banner from "../components/banner"
import Blog from "../components/blog"
import Slant from "../components/slant"
import Triad from "../components/triad"
import Footer from "../components/footer"

const IndexPage = () => {
    var position = 0
    var destination = 0

    var current
    var sections
    var adjust

    function scroll(amount) {
        clearTimeout(adjust)

        let min_distance = 250
        destination = destination - amount

        if(Math.abs(amount) > 125 || destination < sections[current] - min_distance || destination > sections[current] + min_distance) {
            current = (current + ((amount < 0) ? sections.length - 1 : 1)) % sections.length

            destination = sections[current]

            window.removeEventListener("wheel", wheel)
    
            setTimeout(function() {
                window.addEventListener("wheel", wheel)
            }, 250)
        } else {
            adjust = setTimeout(function() {
                destination = sections[current]
            }, 1000)
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
        current = new URLSearchParams(window.location.search).get("current_section") || 0
        sections = Array.from(document.getElementsByTagName("main")[0].children).map(el => (window.innerHeight - el.offsetHeight) / 2 - el.offsetTop)

        destination = sections[current]
        
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
        <main>
            <Banner intro="Hi, I am" name="Jacob Brecheisen" subtitle="Data Analyst" img={ me_img }/>

            <Blog title="Who I am" subtitle="This is my cred" img="Profile.png">This is about my awesomeness.</Blog>

            <Triad title="Experience">
                <div>
                    <p>Data Engineer<br/><small>University of Arkansas</small></p>
                    <Link to="/experience?current_section=0"><img src={ uofa_img } alt={ uofa_img }/></Link>
                </div> 

                <div>
                    <p>Software Developer<br/><small>CareShare</small></p>
                    <Link to="/experience?current_section=2"><img src={ cs_img } alt={ cs_img }/></Link>
                </div> 

                <div>
                    <p>Tutor<br/><small>Do College Better</small></p>
                    <Link to="/experience?current_section=3"><img src={ dcb_img } alt={ dcb_img }/></Link>
                </div> 
            </Triad>

            <Slant title="Education" subtitle="University of Arkansas" img="UofA.png">This is text about how cool the university of arkansas is.</Slant>
            <Slant title="What I've Tested" subtitle="Check out these skills" img="Code.png" pos="right">This is some test text.</Slant>

            <Footer title="Extra Links">
                <tr>
                    <td>Personal Email:</td>
                    <td><Link to="mailto:brecheisen.jacob@gmail.com">brecheisen.jacob@gmail.com</Link></td>
                </tr>
                
                <tr>
                    <td>School Email:</td>
                    <td><Link to="mailto:jmbreche@uark.edu">jmbreche@uark.edu</Link></td>
                </tr>
                
                <tr>
                    <td>Linkedin:</td>
                    <td><a href="https://www.linkedin.com/in/jmbreche">linkedin.com/in/jmbreche</a></td>
                </tr>
                
                <tr>
                    <td>Phone:</td>
                    <td><Link to="tel:9033066315">(903) 306-6315</Link></td>
                </tr>

                <tr>
                    <td>Resume:</td>
                    <td><a href="/static/resume.pdf" target="_blank">resume.pdf</a></td>
                </tr>
            </Footer>
        </main>
    )
}

export const Head = () => (
    <>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>

        <link rel="icon" type="image/x-icon" href="static/logo.ico"/>

        <title>Jacob Brecheisen</title>
    </>
)

export default IndexPage