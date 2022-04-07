import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom"

import "../src/scss/main.scss"

import About from "./components/About"
import Home from "./components/Home"
import Projects from "./components/Projects"

const App = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
