import React, { useState } from "react"
import { Link } from "react-router-dom"

import logo from "../assets/logo.js"
import menu from "../assets/menu.js"

import MobileMenu from "./MobileMenu.js"
import Contact from "./Contact.js"

const TopBar = (props) => {
  const { headerClass } = props
  const [isOpen, setIsOpen] = useState(false)
  const [contactIsOpen, setContactIsOpen] = useState(false)

  const handleOpen = (event) => {
    setIsOpen(true)
  }

  const handleClose = (event) => {
    setIsOpen(false)
  }

  const handleContactOpen = (event) => {
    setContactIsOpen(true)
  }

  const handleContactClose = (event) => {
    setContactIsOpen(false)
  }

  const handleContactClick = (event) => {
    setContactIsOpen(true)
    setIsOpen(false)
  }

  const menuItems = [
    <li key="contact">
      <a tabIndex={0} onClick={handleContactClick} className="menu-link">
        Contact
      </a>
    </li>,
    <li key="portfolio">
      <Link onClick={handleClose} to="/projects" className="menu-link">
        Projects
      </Link>
    </li>,
    <li key="about">
      <Link onClick={handleClose} to="/about" className="menu-link">
        About
      </Link>
    </li>,
  ]

  return (
    <div className={`top-bar ${headerClass}`}>
      <div className="top-bar-left">
        <Link className="logo-container" to="/">
          {logo}
        </Link>
      </div>
      <div className="top-bar-right">
        <div className="show-for-small hide-for-large">
          <div onClick={handleOpen}>{menu}</div>

          <div className="mobile-menu" aria-expanded={isOpen}>
            <MobileMenu
              handleClose={handleClose}
              isOpen={isOpen}
              menuItems={menuItems}
            />
          </div>
          <div
            onClick={handleClose}
            className="mobile-menu-underlay"
            aria-expanded={isOpen}
          ></div>
        </div>

        <>
          <div className="contact-form" aria-expanded={contactIsOpen}>
            <Contact
              handleClose={handleContactClose}
              isOpen={contactIsOpen}
              handleContactClose={handleContactClose}
            />
          </div>
          <div
            onClick={handleContactClose}
            className="contact-form-underlay"
            aria-expanded={contactIsOpen}
          ></div>
        </>

        {!contactIsOpen && <ul className="menu show-for-large">{menuItems}</ul>}
      </div>
    </div>
  )
}

export default TopBar
