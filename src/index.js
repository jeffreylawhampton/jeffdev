import React from "react"
import { render } from "react-dom"

import App from "./App"

document.addEventListener("DOMContentLoaded", () => {
  let reactElement = document.getElementById("root")

  if (reactElement) {
    render(<App />, reactElement)
  }
})
