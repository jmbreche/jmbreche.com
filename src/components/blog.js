import * as React from "react"

import { outer } from "./blog.module.scss"

const Blog = ({ title, subtitle, img, pos, children }) => {
    var unfocus

    function mousemove(event) {
        let circle = document.getElementById("circle")

        circle.style.filter = "blur(0)"
        circle.style.opacity = "1"

        circle.style.left = Math.round((parseFloat(circle.style.left) + (event.clientX - circle.getBoundingClientRect().left) - 200)) + "px"
        circle.style.top = Math.round((parseFloat(circle.style.top) + (event.clientY - circle.getBoundingClientRect().top) - 200)) + "px"

        clearTimeout(unfocus)

        unfocus = setTimeout(function() {
            circle.style.filter = "blur(8px)"
            circle.style.opacity = ".5"
        }, 1000)
    }

    React.useEffect(() => {
        window.addEventListener("mousemove", mousemove)

        let circle = document.getElementById("circle")
        
        setTimeout(function() {
            circle.style.display = "initial"
        }, 1000)

        return () => {
          window.removeEventListener("mousemove", mousemove)
        }
    }, [])

    return (
        <div className={ outer }>
            <section position={ pos ? pos : "left" }>
                <h2>{ title }</h2>
                <p>{ subtitle }</p>

                <div id="circle" style={{ backgroundImage: `url("/images/` + img + `")`, top: 0, left: 0 }}></div>
                
                <span>{ children }</span>
            </section>
        </div>
    )
}

export default Blog