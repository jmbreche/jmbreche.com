import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import "./experience.module.scss"

import Blurb from "../components/blurb"

const IndexPage = () => {
    var position = 0
    var destination = 0

    var current
    var sections

    function scroll(amount) {
        let min_distance = 600
        destination = destination - amount

        if(Math.abs(amount) > 250 || destination < sections[current] - min_distance || destination > sections[current] + min_distance) {
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
        current = new URLSearchParams(window.location.search).get("current_section") || 0
        sections = Array.from(document.getElementsByTagName("main")[0].children).map(el => Math.max((window.innerHeight - el.offsetHeight) / 2 - el.offsetTop, window.innerHeight / 10 - el.firstChild.offsetTop))

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
            <Blurb title="University Of Arkansas">
                As a data engineer at the University of Arkansas, I collaborated with faculty to analyze and transfer large-scale insurance data from BlueCross BlueShield to the University's enterprise systems. I utilized my expertise in SQL, Teradata, SAS and machine learning to drive the successful delivery of this highly complex and data-intensive project. I demonstrated strong problem-solving abilities and technical expertise during the early stages of this project, which helped foster the growth and success of its mission. I was responsible for designing and implementing efficient data pipelines, modeling and cleaning data, and developing machine learning models to extract insights from the data. I also collaborated with other teams to make data-driven decisions.
            </Blurb>

            <Blurb title="Relevant Skills">
                <p>Strong technical skills: Proficiency in SQL, Python, and other programming languages, as well as knowledge of data storage and processing technologies such as Hadoop, Spark, and NoSQL databases.</p>
                <p>Experience with data warehousing and ETL: Understanding of data warehousing principles and experience with ETL processes to move and transform data.</p>
                <p>Knowledge of data modeling and data architecture: The ability to design and implement efficient data models, as well as knowledge of best practices for data architecture.</p>
                <p>Strong analytical and problem-solving skills: The ability to analyze and solve complex data-related problems and make data-driven decisions.</p>
                <p>Strong communication and collaboration skills: The ability to effectively communicate with both technical and non-technical stakeholders and collaborate with cross-functional teams.</p>
                <p>Experience with cloud computing: Knowledge of cloud computing platforms such as AWS, Azure, and GCP and experience with building and deploying data pipelines on the cloud.</p>
                <p>Strong data governance and security skills: Experience with data governance, data quality, and data security best practices.</p>
                <p>Familiarity with big data technologies: Experience with big data technologies such as Hadoop, Spark, and Hive, and the ability to analyze and process large data sets.</p>
                <p>Knowledge of data visualization tools: Experience with data visualization tools such as Tableau, Power BI, and Looker, and the ability to create data visualizations that effectively communicate insights.</p>
                <p>Strong project management skills: The ability to plan, execute, and deliver data engineering projects on time and within budget.</p>
            </Blurb>

            <Blurb title="CareShare" invert="true">
                As the lead software developer for the CareShare product team at the McMillion Studio of Innovation, I played a key role in the development and launch of a healthcare product designed to streamline cost-sharing between employers and employees. I leveraged my expertise in HTML, JavaScript, PHP, and SQL to drive the successful delivery of a highly innovative and user-friendly product, contributing to the growth and success of the team. The CareShare platform, which I was instrumental in developing, helps employers set and monitor benefits for their employees. It is not a pool of funds, but rather a commitment to cover a predetermined amount of employee's health costs. The platform makes it easy for employees to identify themselves and receive treatment, increasing utilization when compared to traditional insurance. Employers also receive alerts when an invoice is available, and they can quickly pay off their balance from the CareShare home page, allowing them to focus on their business.
            </Blurb>

            <Blurb title="Do College Better">
                I have a wealth of experience in helping students excel in their studies, particularly in statistical and data analysis techniques, machine learning, and artificial intelligence. I have a strong ability to break down complex concepts and make them understandable for individual or small groups of students, which enables them to grasp the material more effectively. I have a track record of effectively communicating with students and providing them with personalized feedback and guidance, which helps them to achieve their goals. Furthermore, I have experience in providing students with hands-on exercises and projects that allow them to practice what they have learned and apply it to real-world problems.
            </Blurb>
        </main>
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

export default IndexPage