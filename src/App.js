import React, { useState } from "react"
import UserForm from "./components/UserForm"
import './app.css';

const App = () => {

  const [user, setUser] = useState()

  console.log(user)

  const getFormData = (name, age, DOB, contact, email, password) => {
    setUser({
      name,
      age,
      DOB,
      contact,
      email,
      password
    })
  }

  return (
    <div className="container">
      <UserForm getFormData ={getFormData}/>
    </div>
  )
}

export default App

//install propTypes
//change Root error
//create css file inside src
//redo snippets for css
