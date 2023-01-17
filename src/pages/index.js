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

const Index = () => {
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
        if(event.keyCode === 38) {
            scroll(-150)
        } else if(event.keyCode === 32 || event.keyCode === 40) {
            scroll(150)
        }
    }

    function resize() {
        sections = Array.from(document.getElementsByTagName("main")[0].children).map(el => (window.innerHeight - el.offsetHeight) / 2 - el.offsetTop)

        destination = sections[current]
        position = sections[current]
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
        current = parseInt(new URLSearchParams(window.location.search).get("section")) || 0
        sections = Array.from(document.getElementsByTagName("main")[0].children).map(el => (window.innerHeight - el.offsetHeight) / 2 - el.offsetTop)

        destination = sections[current]
        position = sections[current]

        window.addEventListener("wheel", wheel)
        window.addEventListener("keydown", keydown)
        window.addEventListener("resize", resize)

        update()

        return () => {
          window.removeEventListener("wheel", wheel)
          window.removeEventListener("keydown", keydown)
          window.removeEventListener("resize", resize)
          update = undefined
        }
    }, [])

    return (
        <main>
            <Banner intro="Hi, I am" name="Jacob Brecheisen" subtitle="Data Scientist" img={ me_img }/>

            <Blog title="Who I am" img="Profile.png">
                I am passionate about using data and algorithms to solve real-world problems. My background in mathematics and computer science has provided me with a solid foundation in the field, and I am constantly seeking to expand my knowledge and skills through coursework and personal projects. I have experience working with a variety of machine learning techniques, including supervised and unsupervised learning, deep learning, and natural language processing. In my previous projects, I have applied these methods to tasks such as image classification, sentiment analysis, and anomaly detection. In addition to my technical skills, I am also a strong communicator and collaborator, I believe that the ability to clearly explain and present the results of my analysis is just as important as the analysis itself.
            </Blog>

            <Triad title="Experience">
                <div>
                    <p>Data Engineer<br/><small>University of Arkansas</small></p>
                    <Link to="/experience?section=0"><img src={ uofa_img } alt={ uofa_img }/></Link>
                </div> 

                <div>
                    <p>Software Developer<br/><small>CareShare</small></p>
                    <Link to="/experience?section=1"><img src={ cs_img } alt={ cs_img }/></Link>
                </div> 

                <div>
                    <p>Tutor<br/><small>Do College Better</small></p>
                    <Link to="/experience?section=2"><img src={ dcb_img } alt={ dcb_img }/></Link>
                </div> 
            </Triad>

            <Slant to="/education" title="Education" subtitle="University of Arkansas" img="UofA.png"/>
            <Slant to="/skills" title="Skills" subtitle="Software/Systems" img="Code.png" pos="right"/>

            <Footer title="Extra Links">
                <tr>
                    <td>Personal Email:</td>
                    <td><a href="mailto:brecheisen.jacob@gmail.com">brecheisen.jacob@gmail.com</a></td>
                </tr>
                
                <tr>
                    <td>School Email:</td>
                    <td><a href="mailto:jmbreche@uark.edu">jmbreche@uark.edu</a></td>
                </tr>
                
                <tr>
                    <td>Linkedin:</td>
                    <td><a href="https://www.linkedin.com/in/jmbreche">linkedin.com/in/jmbreche</a></td>
                </tr>
                
                <tr>
                    <td>Phone:</td>
                    <td><a href="tel:9033066315">(903) 306-6315</a></td>
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

export default Index