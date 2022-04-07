import React, { useState } from "react"
import config from "../config.js"
import close from "../assets/close.js"

const defaultFormData = {
  name: "",
  email: "",
  message: "",
}

const Contact = ({ handleContactClose }) => {
  const [formData, setFormData] = useState(defaultFormData)
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})

  const validateInput = (payload) => {
    const emailRegexp = config.validation.email.regexp.emailRegex
    let newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = <span className="error">What's your name?</span>
    }
    if (!formData.message.trim()) {
      newErrors.message = (
        <span className="error">
          What's the buzz, tell me what's a-happening?
        </span>
      )
    }
    if (!formData.email.trim().match(emailRegexp)) {
      newErrors.email = (
        <span className="error">Please enter a valid email</span>
      )
    }
    if (newErrors.name || newErrors.email || newErrors.message) {
      return setErrors(newErrors)
    }
    return true
  }

  const clearForm = () => {
    setFormData(defaultFormData)
    setErrors({})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validateInput(formData)) {
      try {
        fetch("/api/v1/contact", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
      } catch (error) {
        console.log("Something went wrong")
      }
      setSent(true)
      clearForm()
      setTimeout(() => {
        handleContactClose()
      }, 1000)
    }
  }

  const handleInputChange = (event) => {
    event.preventDefault()
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  return (
    <>
      <div className="closeicon" onClick={handleContactClose}>
        {close}
      </div>
      <div className="contact-form-container">
        <h1>Get in touch</h1>
        {!sent ? (
          <form id="contact" onSubmit={handleSubmit}>
            <label>
              {errors.name ? errors.name : ""}
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              {errors.email ? errors.email : ""}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
            <label>
              {errors.message ? errors.message : ""}
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                rows="3"
                onChange={handleInputChange}
              />
            </label>
            <input type="submit" className="button" value="Submit" />
          </form>
        ) : (
          <span className="confirmation">Thanks! Talk to you soon.</span>
        )}
      </div>
    </>
  )
}

export default Contact
