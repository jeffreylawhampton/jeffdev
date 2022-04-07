import React from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import TopBar from "./Topbar"
import pupperater from "../assets/pupperater.png"
import inventory from "../assets/inventory.png"
import ageup from "../assets/ageup.png"
import havendi from "../assets/havendi.png"

const Projects = (props) => (
  <ReactFullpage
    licenseKey={"8725F6E1-B46B4902-B345F7DC-1A78DA12"}
    scrollingSpeed={1100}
    scrollHorizontally={true}
    continuousHorizontal={true}
    continuousVertical={true}
    controlArrows={true}
    slidesNavigation={true}
    anchors={["sectionOne"]}
    render={({ fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <TopBar headerClass="" />
          <div className="section">
            <div className="slide slate center-bottom">
              <div className="content-container">
                <h1>Projects</h1>
                <p>Check out examples of my previous work.</p>
              </div>
            </div>

            <div className="slide inventory">
              <div className="content-container grid-x grid-margin-x row-reverse">
                <div className="cell small-12 large-6">
                  <a
                    href="https://www.getinventory.co"
                    target="_blank"
                    title="Inventory"
                  >
                    <img src={inventory} />
                  </a>
                </div>
                <div className="cell small-12 large-6">
                  <h1>Inventory</h1>
                  <h5>Copy, design, and development (solo)</h5>
                  <p>
                    App that lets users easily track what they have and where.
                    Includes item search, a custom color picker, and
                    drag-and-drop image uploading through Amazon S3. Create your
                    own account, or log in with{" "}
                    <strong>demoaccount@notarealemail.com</strong> and password{" "}
                    <strong>u2cy8qvd</strong> to see a demo. (Please use
                    responsibly.)
                  </p>
                  <div className="divider"></div>
                  <h5>Built with:</h5>
                  <ul className="tools">
                    <li>React</li>
                    <li>Node</li>
                    <li>Postgres</li>
                    <li>Express</li>
                  </ul>
                  <a
                    href="https://www.getinventory.co"
                    className="button"
                    target="_blank"
                    title="Inventory"
                  >
                    View project
                  </a>
                </div>
              </div>
            </div>

            <div className="slide pupperater">
              <div className="content-container grid-x grid-margin-x row-reverse">
                <div className="cell small-12 large-6">
                  <a
                    href="http://www.pupperater.com"
                    target="_blank"
                    title="Pupperater"
                  >
                    <img src={pupperater} />
                  </a>
                </div>
                <div className="cell small-12 large-6">
                  <h1>Pupperater</h1>
                  <h5>Copy, design, and development (team)</h5>
                  <p>
                    An homage to Twitter's @dog_rates, Pupperater features
                    drag-and-drop uploading of dog pics, along with the ability
                    to review and upvote/downvote other users' puppers.
                  </p>
                  <div className="divider"></div>
                  <h5>Built with:</h5>
                  <ul className="tools">
                    <li>React</li>
                    <li>Node</li>
                    <li>Postgres</li>
                    <li>Express</li>
                  </ul>

                  <a
                    href="http://www.pupperater.com"
                    target="_blank"
                    title="Pupperater"
                    className="button"
                  >
                    View project
                  </a>
                </div>
              </div>
            </div>

            <div className="slide havendi">
              <div className="content-container grid-x grid-margin-x row-reverse">
                <div className="cell small-12 large-6">
                  <a
                    target="_blank"
                    title="Haven Disability"
                    href="https://disability.havenlife.com"
                  >
                    <img src={havendi} />
                  </a>
                </div>
                <div className="cell small-12 large-6">
                  <h1>Haven Disability</h1>
                  <h5>Copy and development (solo)</h5>
                  <p>
                    Built as part of my role at Haven Life. I wrote all copy and
                    created the site from our design team's Figma mockups using
                    Wordpress. (Note: I created all of the customer-facing
                    marketing pages, but the application funnel and account
                    center were built in React by the engineering team.)
                  </p>
                  <div className="divider"></div>
                  <h5>Built with:</h5>
                  <ul className="tools">
                    <li>Wordpress</li>
                  </ul>
                  <a
                    target="_blank"
                    title="Haven Disability"
                    href="https://disability.havenlife.com"
                    className="button"
                  >
                    View project
                  </a>
                </div>
              </div>
            </div>

            <div className="slide ageup">
              <div className="content-container grid-x grid-margin-x row-reverse">
                <div className="cell small-12 large-6">
                  <a
                    target="_blank"
                    title="AgeUp"
                    href="https://learn.age-up.com"
                  >
                    <img src={ageup} />
                  </a>
                </div>
                <div className="cell small-12 large-6">
                  <h1>AgeUp</h1>
                  <h5>Copy and development (solo)</h5>
                  <p>
                    As with Haven Disability, I wrote all site copy and built
                    the customer-facing marketing pages from Figma mockups,
                    including the homepage, how it works, FAQs, about, press,
                    etc.)
                  </p>
                  <div className="divider"></div>
                  <h5>Built with:</h5>
                  <ul className="tools">
                    <li>Wordpress</li>
                  </ul>
                  <a
                    target="_blank"
                    title="AgeUp"
                    href="https://learn.age-up.com"
                    className="button"
                  >
                    View project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      )
    }}
  />
)

export default Projects
