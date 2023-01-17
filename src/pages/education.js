import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import "./education.module.scss"

import uofa_img from "../images/UofA.png"

import Blurb from "../components/blurb"
import Duo from "../components/duo"
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

        window.addEventListener("wheel", wheel)
        window.addEventListener("keydown", keydown)
        window.addEventListener("resize", resize)

        setTimeout(update, 50)

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
                <Duo>
                    <Blurb title="University of Arkansas" watermark={ uofa_img }>
                        <ul>
                            <li><h4>Bachelor of Science, Data Science</h4></li>
                            <li><h4>Bachelor of Arts, Computer Science</h4></li>
                        </ul>
                    </Blurb>

                    <Blurb>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Graduation Date:</td>
                                    <td>May 2024</td>
                                </tr>
                                
                                <tr>
                                    <td>University GPA:</td>
                                    <td>4.0</td>
                                </tr>
                                
                                <tr>
                                    <td>University Credit Hours:</td>
                                    <td>119</td>
                                </tr>
                                
                                <tr>
                                    <td>Overall GPA:</td>
                                    <td>4.0</td>
                                </tr>
                                
                                <tr>
                                    <td>Overall Credit Hours:</td>
                                    <td>152</td>
                                </tr>
                                
                                <br/>

                                <tr>
                                    <td colSpan="2">Honors College</td>
                                </tr>

                                <tr>
                                    <td colSpan="2">Computational Analytics Concentration</td>
                                </tr>

                                <tr>
                                    <td colSpan="2">Arkansas Data Science Association Member</td>
                                </tr>

                                <tr>
                                    <td colSpan="2">Completed coursework in Java, C++, Python, and R</td>
                                </tr>
                            </tbody>
                        </table>
                    </Blurb>
                </Duo>
                    
                <Blurb title="Awards and Honors">
                    <ul>
                        <li><h4>Dean's List</h4></li>
                        <li><h4>Chancellor's List</h4></li>
                        <li><h4>Governor's Scholarship</h4></li>
                        <li><h4>Pat & Gus Blass Scholarship</h4></li>
                        <li><h4>Charles D. Brock Scholarship</h4></li>
                        <li><h4>Brandon Burlsworth Memorial Scholarship</h4></li>
                    </ul>
                </Blurb>

                <Duo invert="true">
                    <Blurb title="Optimization Methods in Data Science" invert="true">
                        DASC 3203 is an advanced mathematical course providing the foundations and concepts of optimization that are essential elements of machine learning algorithms in data science, ranging from mathematical optimization to convex optimization to unconstrained and constrained optimization to nonlinear optimization to stochastic optimization. Students will gain hands-on experience using Python and various optimization packages in Python.
                    </Blurb>

                    <Blurb invert="true">
                        <p><b>Python</b></p>
                        <p><b>Machine Learning</b></p>
                        <p><b>Optimization</b></p>
                    </Blurb>
                </Duo>

                <Duo invert="true">
                    <Blurb title="Statistical Learning" invert="true">
                        DASC 3213 is a course providing an in depth look at the theory and practice of applied linear modeling for data science: including model building, selection, regularization, classification and prediction. Students will gain hands-on experience using statistical software to learn from data using applied linear models.
                    </Blurb>

                    <Blurb invert="true">
                        <p><b>Statistical Analysis</b></p>
                        <p><b>Machine Learning</b></p>
                        <p><b>Statistics Software</b></p>
                    </Blurb>
                </Duo>

                <Duo invert="true">
                    <Blurb title="Data Management and Data Base" invert="true">
                        DASC 2203 focuses on the investigation and application of data science database concepts including DBMS fundamentals, database technology and administration, data modeling, SQL, data warehousing, and current topics in modern database management.
                    </Blurb>

                    <Blurb invert="true">
                        <p><b>SQL</b></p>
                        <p><b>Python</b></p>
                        <p><b>R</b></p>
                    </Blurb>
                </Duo>

                <Duo>
                    <Blurb title="Business Intelligence">
                        ISYS 4293 focuses on creating, developing and storing information and knowledge from internal and external sources to better support business decisions. We will consider techniques from machine learning, data mining, and information retrieval to extract useful knowledge from data, which could be used for business intelligence, personalization or user profiling.
                    </Blurb>
                        
                    <Blurb>
                        <p><b>Microsoft Azure</b></p>
                        <p><b>PowerBI</b></p>
                        <p><b>Python</b></p>
                    </Blurb>
                </Duo>

                <Duo invert="true">
                    <Blurb title="Multivariable Math for Data Scientists" invert="true">
                        DASC 2594 provides an in depth look at the multivariate calculus and linear algebra necessary for a successful understanding of modeling for data science. Students will gain an understanding of the mathematical and geometric concepts used in optimization and scientific computation using mathematical and computational techniques. At the end of the course, students will be equipped with the calculus and linear algebra skills and knowledge to be successful in courses in optimization and advanced data science methods.
                    </Blurb>

                    <Blurb invert="true">
                        <p><b>R</b></p>
                        <p><b>Bayesian Statistics</b></p>
                        <p><b>Linear Algebra</b></p>
                    </Blurb>
                </Duo>

                <Duo invert="true">
                    <Blurb title="Data Visualization and Communication" invert="true">
                        DASC 2213 is a seminar providing an essential element of data science: the ability to effectively communicate data analytics findings using visual, written, and oral forms. Students will gain hands-on experience using data visualization software and preparing multiple formats of written reports (technical, social media, policy) that build a data literacy and communication toolkit for interdisciplinary work. In essence, this is a course emphasizing finding and telling stories from data, including the fundamental principles of data analysis and visual presentation conjoined with traditional written formats.
                    </Blurb>

                    <Blurb invert="true">
                        <p><b>Tableau</b></p>
                        <p><b>Python</b></p>
                        <p><b>R</b></p>
                    </Blurb>
                </Duo>

                <Duo invert="true">
                    <Blurb title="Data Structures & Algorithms" invert="true">
                        DASC 2103 focuses on fundamental data structures and associated algorithms for computing and data analytics. Topics include the study of data structures such as linked lists, stacks, queues, hash tables, trees, and graphs, recursion, their applications to algorithms such as searching, sorting, tree and graph traversals, divide-and-conquer, greedy algorithms, and dynamic programming, and the theory of NP-completeness. Students will gain hands-on experience using Python or Java.
                    </Blurb>

                    <Blurb invert="true">
                        <p><b>Python</b></p>
                        <p><b>Java</b></p>
                        <p><b>Algorithm Design</b></p>
                    </Blurb>
                </Duo>

                <Duo>
                    <Blurb title="Business Analytics and Visualization">
                        ISYS 4193 is an introductory study of business analytics, visualization, and systems to provide analytics-based information derived from data within and/or external to the organization. Business analytics used to support management in the decision making. Application of tools in business analytics, problem solving, visualization, and decision making.
                    </Blurb>

                    <Blurb>
                        <p><b>SAS</b></p>
                        <p><b>Tableau</b></p>
                        <p><b>Data Communication</b></p>
                    </Blurb>
                </Duo>

                <Duo invert="true">
                    <Blurb title="Programming Languages for Data Science" invert="true">
                        DASC 1104 provides a semester-long introduction to basic concepts, tools, and languages for computer programming using Python and R, two powerful programming languages used by data scientists. This class will introduce students to computer programming and provide them with the basic skills and tools necessary to efficiently collect, process, analyze, and visualize datasets. Students will gain hands-on experience with de novo programming in R and Python, finding and utilizing packages, and working in both interactive (Jupyter and RStudio) and non-interactive (Unix) environments.
                    </Blurb>

                    <Blurb invert="true">
                        <p><b>Python</b></p>
                        <p><b>R</b></p>
                        <p><b>Unix</b></p>
                    </Blurb>
                </Duo>

                <Duo invert="true">
                    <Blurb title="Introduction to Object Oriented Programming for Data Science" invert="true">
                        DASC 1204, introduces object-oriented programming in JAVA. It covers object-oriented programming elements and techniques in JAVA, such as primitive types and expressions, basic I/O, basic programming structures, abstract data type, object class and instance, Methods, Java File I/O, object inheritance, collections and composite objects, advanced input /output: streams and files, and exception handling. Students will gain hands-on programming experience using JAVA.
                    </Blurb>

                    <Blurb invert="true">
                        <p><b>Java</b></p>
                        <p><b>OOP</b></p>
                        <p><b>Software Development</b></p>
                    </Blurb>
                </Duo>

                <Duo>
                    <Blurb title="Programming Foundations I">
                        CSCE 2004 is an introductory programming course for students majoring in computer science or computer engineering. Software development process: problem specification, program design, implementation, testing and documentation. Programming topics: data representation, conditional and iterative statements, functions, arrays, strings, file I/O and classes. Using C++ in a UNIX environment.
                    </Blurb>

                    <Blurb>
                        <p><b>C++</b></p>
                        <p><b>Unix</b></p>
                        <p><b>Software Development</b></p>
                    </Blurb>
                </Duo>

                <Duo invert="true">
                    <Blurb title="Introduction to Probability" invert="true">
                        STAT 3013 is a calculus-based introduction to probability. Discrete probability spaces and counting techniques, discrete and continuous probability distributions, random variables, random samples, law of large numbers, central limit theorem.
                    </Blurb>

                    <Blurb invert="true">
                        <p><b>R</b></p>
                        <p><b>Statistical Analysis</b></p>
                        <p><b>Probability Theory</b></p>
                    </Blurb>
                </Duo>

                <Duo>
                    <Blurb title="Accounting Technology">
                        ACCT 3533 provides an overview of accounting information systems and illustrates the importance of technology to accountants. Students are exposed to a variety of information technologies including manual, file-oriented, and database systems. The relative advantages and disadvantages of each type of system are highlighted and discussed.
                    </Blurb>

                    <Blurb>
                        <p><b>SQL</b></p>
                        <p><b>Microsoft Access</b></p>
                        <p><b>Microsoft Visio</b></p>
                    </Blurb>
                </Duo>
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

        <title>Education</title>
    </>
)

export default Education