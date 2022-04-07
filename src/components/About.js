import React from "react"
import jeff from "../assets/jh2.png"
import TopBar from "./Topbar"

const About = (props) => {
  return (
    <>
      <TopBar headerClass="" />
      <div className="page-container gradient-bg">
        <div className="grid-x about">
          <div className="pic cell small-12 large-6">
            <img alt="Picture of Jeff Hampton" src={jeff} />
          </div>
          <div className="cell small-12 large-6">
            <h1 className="aboutme">About me</h1>
            <p>
              Hi! I'm Jeff Hampton. I make stuff. These days that's mostly web
              apps, but for the past 10 years or so I've worked in marketing at
              several Boston startups. My primary role was copywriter, but I
              picked up some design and development skills along the way,
              creating anding pages, marketing emails, and customer-facing
              websites. It dawned on me that I enjoy making websites far more
              than writing them, so decided to make a career change.
            </p>
            <p>
              I recently graduated from Launch Academy's full stack web
              development program (React/Node) as a member of the 35th Boston
              cohort and am currently looking for my first official developer
              position. I'm primarily (okay, entirely) interested in front-end
              design and development. I'm also proficient in the Adobe Creative
              Suite and willing to proofread your website copy while developing,
              but preferably not write it.
            </p>
            <div className="link-container">
              <a
                href="https://drive.google.com/file/d/1vVe_MGLzdtNbyCMHssURtF1y9bFPGj5P/view"
                target="_blank"
              >
                Resume
              </a>

              <a
                href="https://www.linkedin.com/in/jeffreylawhampton/"
                target="_blank"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
