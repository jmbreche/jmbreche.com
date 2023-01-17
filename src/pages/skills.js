import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import "./skills.module.scss"

import Blurb from "../components/blurb"
import Back from "../components/back"

const Skills = () => {
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

        setTimeout(function() {
            document.getElementsByTagName("body")[0].style.visibility = "visible"
        }, 50)

        return () => {
          window.removeEventListener("wheel", wheel)
          window.removeEventListener("keydown", keydown)
          window.removeEventListener("resize", resize)
          update = undefined
        }
    }, [current])

    return (
        <>
            <main>
                <Blurb title="Python">
                    I have a solid understanding of Python and its various libraries and frameworks. My work with Python has primarily been through my studies at university, where I have been exposed to popular machine learning libraries such as TensorFlow, PyTorch, and scikit-learn. I have been working on various projects involving these libraries, such as image classification, sentiment analysis and anomaly detection. I also have experience working with Jupyter Notebooks. My proficiency in Python has been further enhanced through my participation in various group projects and assignments, where I have had the opportunity to apply my skills to real-world data analysis problems.
                </Blurb>

                <Blurb title="R" invert="true">
                    I am proficient in using R for various data analysis and machine learning tasks. I am familiar with a wide range of packages and tools in R such as caret, randomForest, glmnet, and ggplot2, which I have been using for tasks like classification, regression, and clustering. I have experience working with large datasets and have been able to clean, visualize, and analyze data effectively. Additionally, I have been able to use R Markdown to create well-formatted and reproducible reports that effectively communicate my findings.
                </Blurb>

                <Blurb title="SQL">
                    I have developed a strong expertise in SQL, particularly in data modeling, indexing, and optimization within MySQL and other popular frameworks. I have a deep understanding of database design principles and have been able to apply them to various data analysis tasks. My expertise in SQL has grown significantly via my experience as a software engineer for CareShare, where I have been responsible for designing and maintaining the database systems and ensuring their performance and scalability. I am familiar with different types of data structures such as relational, non-relational and columnar databases, and I have experience in using DDL and DML commands to manage and query data. Additionally, I have experience in indexing and optimizing databases to ensure fast query response times and have been able to troubleshoot and debug performance issues. Overall, my experience with SQL has been instrumental in my ability to work with large datasets and extract valuable insights from them.
                </Blurb>

                <Blurb title="Git" invert="true">
                    I am familiar with common Git commands such as commit, push, pull, and merge as well as branching strategies like Gitflow. I have experience using Git in both a collaborative setting in university projects and managing the codebase in my role as a software engineer for CareShare.
                </Blurb>

                <Blurb title="Hadoop/Spark">
                    I am familiar with the basics of Hadoop and Spark. My understanding of Hadoop and Spark is limited, but I have some experience using them in a data engineering role with the University of Arkansas and BlueCross BlueShield, where I gained hands-on experience in working with big data sets and learned about their basic concepts and functionalities.
                </Blurb>

                <Blurb title="Tableau" invert="true">
                    As a Data Science student, I have gained a solid understanding of Tableau and its capabilities for data visualization. I have studied Tableau extensively in several classes at university, where I have been exposed to its various features and functionalities for creating interactive and visually appealing representations of data. I have experience in connecting to different data sources, creating and customizing visualization, and building dashboards. I have a good understanding of the best practices for data visualization and I am familiar with the Tableau's functionality for data storytelling. I have used Tableau in several projects and assignments, and I am comfortable in working with it for data exploration and communicating insights.
                </Blurb>

                <Blurb title="PowerBI">
                    I have some understanding of PowerBI. Most of my experience with PowerBI has been gained through exposure in Business Intelligence (ISYS 4293), where I was able to learn and apply its basic features and functionalities. I have experience in connecting to different data sources, creating and customizing visualizations, and building basic dashboards. I am aware that PowerBI is a powerful tool for data visualization, and I am interested in expanding my knowledge and skills with it by taking more classes and working on personal projects.
                </Blurb>

                <Blurb title="SAS" invert="true">
                    I have a firm understanding of SAS and its capabilities for statistical analysis. I have had extensive coursework in several university classes, where I studied SAS’s many uses regarding data manipulation, analysis, and modeling. I have experience in working with SAS software, and I am familiar with SAS language, data step, proc step, and macro programming. I have used SAS in several projects, and I am comfortable in working with it for data exploration, statistical analysis and communicating insights. Additionally, I am aware that SAS is widely used in the industry and academia, and I have a good understanding of best practices for using SAS in a real-world setting.
                </Blurb>

                <Blurb title="Java">
                    I have a strong foundation in Java, with experience in both object-oriented and functional programming paradigms. I have been programming in Java since I was thirteen, which has provided me with a deep understanding of the language and its capabilities. My experience in Java includes working on various types of projects, from simple command-line tools to more complex web and mobile applications. I have experience with core Java libraries and frameworks such as the Java Standard Library, Spring and Hibernate. Additionally, I am familiar with the Java development ecosystem, including tools like Eclipse and IntelliJ IDEA, and I have experience working with build tools such as Maven and Gradle. My experience with Java has been instrumental in my ability to develop robust and maintainable code, and to design and implement complex algorithms.
                </Blurb>

                <Blurb title="C++" invert="true">
                    I am relatively familiar with C++, and I have a strong background in it, mostly obtained outside of school. My experience with C++ includes lexical analysis, syntax parsing, and code generation through a project I've completed where I created a compiler. I am familiar with C++ libraries and frameworks such as the STL and Boost, and I have experience with build tools such as CMake. My experience with C++ has been instrumental in my ability to write efficient, low-level code, and to create efficient algorithms.
                </Blurb>
            </main>

            <Back to="/?section=4"/>
        </>
    )
}

export const Head = () => (
    <>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>

        <link rel="icon" type="image/x-icon" href="static/logo.ico"/>

        <title>Skills</title>
    </>
)

export default Skills