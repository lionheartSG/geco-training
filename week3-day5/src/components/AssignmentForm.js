import "../App.css"
import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

let [validName, validDOB, validEmail, validContact, validInfo] = Array(5).fill(false)

const AssignmentForm = props => {
  const [name, setName] = useState("nil")
  const [DOB, setDOB] = useState("nil")
  const [email, setEmail] = useState("nil")
  const [contact, setContact] = useState("nil")
  const [info, setInfo] = useState("nil")

  const alphaRegex = /^[a-zA-Z\s]+$/
  const emailRegex = /(\w*)(@)(\w*)(\.)(\w*)$/
  const contactRegex = /\d{10}/

  const handleSubmit = e => {
    e.preventDefault()
    // console.log("Validname:", validName)
    // console.log("ValidDOB:", validDOB)
    // console.log("Validemail:", validEmail)
    // console.log("Validcontact:", validContact)
    // console.log("Validinfo:", validInfo)
    if (validName && validDOB && validEmail && validContact && validInfo) {
      props.getFormData(name, DOB, email, contact, info)
      document.getElementById("valid?").innerHTML = "Form successfully submitted!"
      document.getElementById("valid?").style.color = "green"
      document.getElementById("dob").value = ""
      document.getElementById("email").value = ""
      document.getElementById("contact").value = ""
      document.getElementById("info").value = ""
      document.getElementById("name").value = ""
    } else {
      document.getElementById("valid?").innerHTML = "Please check your submission!"
      document.getElementById("valid?").style.color = "red"
    }
  }

  const handleValidation = e => {
    switch (e.target.id) {
      case "name":
        if (e.target.value.match(alphaRegex) || e.target.value === "") {
          document.getElementById("inputError?").innerHTML = ""
          validName = true
          setName(e.target.value)
        } else {
          document.getElementById("inputError?").innerHTML = "No numbers or special character allowed"
          validName = false
        }
        break

      case "dob":
        let validateDate = e.target.value.split("-")
        if (validateDate[0] < 2022 && validateDate[0] > 1922) {
          document.getElementById("inputError?").innerHTML = ""
          validDOB = true
          setDOB(e.target.value)
        } else {
          document.getElementById("inputError?").innerHTML = "Please input your correct year of birth<br>(1922 - 2022)"
          validDOB = false
        }
        break

      case "email":
        if (e.target.value.match(emailRegex) || e.target.value === "") {
          document.getElementById("inputError?").innerHTML = ""
          validEmail = true
          setEmail(e.target.value)
        } else {
          document.getElementById("inputError?").innerHTML = "Please key in valid email"
          validEmail = false
        }
        break

      case "contact":
        if ((e.target.value.match(contactRegex) && e.target.value.length === 10) || e.target.value === "") {
          document.getElementById("inputError?").innerHTML = ""
          validContact = true
          setContact(e.target.value)
        } else {
          document.getElementById("inputError?").innerHTML = "Please input 10 digits contact"
          validContact = false
        }
        break

      case "info":
        if (e.target.value.trim().length >= 250) {
          document.getElementById("inputError?").innerHTML = ""
          validInfo = true
          setInfo(e.target.value)
        } else {
          document.getElementById("inputError?").innerHTML = `You need to key in at least 250 chars. Current count ${e.target.value.trim().length}`
          validInfo = false
        }
        break

      default:
        break
    }
  }

  return (
    <div className="container-full">
      <div className="container-picture"></div>
      <div className="container-form">
        <div className="input-form">
          <h3>Submit this form to see magic!</h3>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control type="email" placeholder="Name" onChange={handleValidation} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="dob">
              <Form.Label>Your DOB</Form.Label>
              <Form.Control type="date" placeholder="date" onChange={handleValidation} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Control type="text" placeholder="Email" onChange={handleValidation} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contact">
              <Form.Control type="text" placeholder="Phone" onChange={handleValidation} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="info">
              <Form.Control as="textarea" rows={4} placeholder="More about you" onChange={handleValidation} />
            </Form.Group>

            <Button variant="warning" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
          <p id="valid?"></p>
          <p id="inputError?" style={{ color: "red" }}></p>
        </div>
      </div>
    </div>
  )
}

export default AssignmentForm
