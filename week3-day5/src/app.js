import React, { useState, useEffect } from "react"
import AssignmentForm from "./components/AssignmentForm"
import Card from "./components/Card"
import Navibar from "./components/Navibar"
import "./App.css"

const App = () => {
  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem('allUsers'));
    if (allUsers) {
     setAllUsers(allUsers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('allUsers', JSON.stringify(allUsers));
  }, [allUsers]);

  const getFormData = (userName, dob, email, contact, info) => {
    setAllUsers(oldArray => [
      ...oldArray,
      {
        userName,
        dob,
        email,
        contact,
        info
      }
    ])
  // localStorage.setItem("allUsers", JSON.stringify(allUsers))
  }

  return (
    <div>
      <Navibar />
      <div className="main-body">
        <AssignmentForm getFormData={getFormData} />
        <Card allUsers={allUsers} />
      </div>
    </div>
  )
}

export default App
