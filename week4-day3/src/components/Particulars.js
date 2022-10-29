import "../App.css"
import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

const Particulars = () => {
  const [newForm, setNewForm] = useState({})
  const [errors, setErrors] = useState({})
  const emailRegexp = /(\w*)(@)(\w*)(\.)(\w*)$/
  const contactRegexp = /\D/

  const setField = (field, value) => {
    setNewForm({
      ...newForm,
      [field]: value
    })
    if ( errors[field] ) setErrors({
      ...errors,
      [field]: null
    })
  }

  const findFormErrors = () => {
    const { name, email, address, contact } = newForm
    const newErrors = {}

    if (!name || name === "") newErrors.name = "Name cannot be blank!"
    else if (name.length < 5) newErrors.name = "Name is too short"

    if (!email || email === "") newErrors.email = "Email cannot be blank"
    else if (!emailRegexp.test(email)) newErrors.email = "Email is invalid"

    if (!address || address === "") newErrors.address = "Address cannot be blank"
    else if (address.length < 5) newErrors.address = "Address is not valid"

    if (!contact || contact === "") newErrors.contact = "Contact cannot be blank!"
    else if (contact.length < 8) newErrors.contact = "Contact is too short"
    else if (contactRegexp.test(contact)) newErrors.contact = "Contact cannot contain alphabets"

    return newErrors
  }

  const handleSubmit = e => {
    e.preventDefault()
    const newErrors = findFormErrors()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      alert("Form is submitted")
    }
  }

  return (
    <div className="container mt-5 mb-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" onChange={e => setField("name", e.target.value)} isInvalid={ errors.name } />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Email" onChange={e => setField("email", e.target.value)} isInvalid={ errors.email }/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" onChange={e => setField("address", e.target.value)} isInvalid={ errors.address }/>
          <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicContact">
          <Form.Label>Contact</Form.Label>
          <Form.Control type="text" placeholder="Contact" onChange={e => setField("contact", e.target.value)} isInvalid={ errors.contact }/>
          <Form.Control.Feedback type="invalid">{errors.contact}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Particulars
