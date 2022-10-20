import '../app.css';
import React, { useState } from "react"

let [validName, validEmail, validContact, validAge, validDOB, validPassword] = Array(7).fill(false)

const UserForm = (props) => {

  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [DOB, setDOB] = useState()
  const [contact, setContact] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const alphaRegex = /^[a-zA-Z\s]+$/
  const emailRegex = /(\w*)(@)(\w*)(\.)(\w*)$/
  const contactRegex = /\d{8}/
  const ageRegex = /\d/
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

  const handleValidation = (e) => {
    switch (e.target.id) {
      case "name":
        if(e.target.value.match(alphaRegex) || e.target.value === '') {
          document.getElementById('nameError').innerHTML = ""
          validName = true
          setName(e.target.value)
        } else {
          document.getElementById('nameError').innerHTML = "No numbers or special character allowed"
          validName = false
        }
      break;

      case "age":
        if(e.target.value.match(ageRegex) && e.target.value.length === 2 && e.target.value >= 18 || e.target.value === '') {
          document.getElementById('ageError').innerHTML = ""
          validAge = true
          setAge(e.target.value)
        } else {
          document.getElementById('ageError').innerHTML = "Please input a valid age!<br>You must be more than 18 to register"
          validAge = false
        }
      break;

      case "dob":
        let validateDate = e.target.value.split('-')
        if(validateDate[0] < 2022 && validateDate[0] > 1922) {
          document.getElementById('dateOfBirthError').innerHTML = ""
          validDOB = true
          setDOB(e.target.value)
        } else {
          document.getElementById('dateOfBirthError').innerHTML = "Please input your correct year of birth<br>(1922 - 2022)"
          validDOB = false
        }
      break

      case "contact":
        if(e.target.value.match(contactRegex) && e.target.value.length === 8 || e.target.value === '') {
          document.getElementById('contactError').innerHTML = ""
          validContact = true
          setContact(e.target.value)
        } else {
          document.getElementById('contactError').innerHTML = "Please input 8 digits contact"
          validContact = false
        }
      break

      case "email":
        if(e.target.value.match(emailRegex) || e.target.value === '') {
          document.getElementById('emailError').innerHTML = ""
          validEmail = true
          setEmail(e.target.value)
        } else {
          document.getElementById('emailError').innerHTML = "Please key in valid email"
          validEmail = false
        }
      break

      case "password":
        if(e.target.value.match(passwordRegex) || e.target.value === '') {
          document.getElementById('passwordError').innerHTML = ""
          validPassword = true
          setPassword(e.target.value)
        } else {
          document.getElementById('passwordError').innerHTML = "Minimum eight characters,<br>at least one letter and one number:"
          validPassword = false
        }
      break

      default:
        break;
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
      if (validName && validAge && validDOB && validAge && validContact && validEmail && validPassword) {
        props.getFormData(name, age, DOB, contact, email, password)
        document.getElementById('valid?').innerHTML = "Form successfully submitted!"
        document.getElementById('valid?').style.color = "green"
      } else {
        document.getElementById('valid?').innerHTML = "There is an error in your submission.<br /> Please check your submission!"
      }
  }

  return (
    <div className="form-container">
      <h3><strong>Registration Page</strong></h3>
      <br />
      <br />
      <div id='form'>
        <form>
          <label>Name</label>
          <input type="text" id="name" onChange={handleValidation}/>
          <p id="nameError" style={{color: "red"}}></p>
          <br />
          <label>Age</label>
          <input type="text" id="age" onChange={handleValidation}/>
          <p id="ageError" style={{color: "red"}}></p>
          <br />
          <label>Date of Birth</label>
          <input type="date" id="dob" onChange={handleValidation}/>
          <p id="dateOfBirthError" style={{color: "red"}}></p>
          <br />
          <label>Contact</label>
          <input type="text" id="contact" onChange={handleValidation}/>
          <p id="contactError" style={{color: "red"}}></p>
          <br />
          <label>Email</label>
          <input type="text" id="email" onChange={handleValidation}/>
          <p id="emailError" style={{color: "red"}}></p>
          <br />
          <label>Password</label>
          <input type="text" id="password" onChange={handleValidation}/>
          <p id="passwordError" style={{color: "red"}}></p>
          <br />
          <button onClick={handleSubmit} class="btn btn-success">Submit</button>
        </form>
      </div>
      <p id='valid?' style={{color: "red"}}></p>
    </div>
  )
}

export default UserForm
