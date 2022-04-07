import React from "react"
import Social from "./Social.js"
import TopBar from "./Topbar.js"

const Home = (props) => {
  return (
    <>
      <TopBar headerClass="neon" />
      <div className={`page-container brick`}>
        <div className="neon-container">
          <div className="headline-container">
            <h1 className="flicker headline">Jeff Hampton</h1>
            <div className="bar"></div>
            <h2 className="subhead">Front end developer</h2>
            <div className="bar"></div>
            <div className="vacancy">
              <h4>
                <span className="unlit">NO</span>{" "}
                <span className="lit">JOB VACANCY</span>
              </h4>
              <Social />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
