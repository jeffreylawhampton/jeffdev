import React, { useState } from "react"
import { Link } from "react-router-dom"
import close from "../assets/close.js"

const MobileMenu = ({ handleClose, isOpen, menuItems }) => {
  return (
    <>
      <div className="closeicon" onClick={handleClose}>
        {close}
      </div>
      <div className="mobile-menu-content">
        <ul className="menu mobile">
          <li key="home">
            <Link className="menu-link" onClick={handleClose} to="/">
              Home
            </Link>
          </li>
          {menuItems}
        </ul>
      </div>
    </>
  )
}

export default MobileMenu
