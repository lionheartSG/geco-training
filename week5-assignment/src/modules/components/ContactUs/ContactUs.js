import "./ContactUs.css"
import React, { useState } from "react"
import Form from '../Form/Form'

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-us-left">
      <Form />
      </div>
      <div className="contact-us-right">
        <h1>Get in touch</h1>
        <h2>Want to get in touch? We'd love to hear from you. Here's how you can reach us</h2>
      </div>
    </div>
  )
}

export default ContactUs
