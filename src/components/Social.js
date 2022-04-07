import React from "react"
import github from "../assets/github.js"
import email from "../assets/email.js"
import linkedin from "../assets/linkedin.js"

const Social = (props) => {
  return (
    <>
      <div className="social">
        <a target="_top" href="mailto: jeffreylawhampton@gmail.com">
          {email}
        </a>
        <a
          href="https://www.linkedin.com/in/jeffreylawhampton/"
          target="_blank"
        >
          {linkedin}
        </a>
        <a href="https://github.com/jeffreylawhampton/" target="_blank">
          {github}
        </a>
      </div>
    </>
  )
}
export default Social
