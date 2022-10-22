import "../App.css"
import React, { useState } from "react"

const Card = props => {
  const { allUsers } = props
  console.log(allUsers)

  return (
    <div className="container-card">
      {allUsers.map(user => {
        return (
            <div className="card" style={{ width: 320, borderRadius: 16 }}>
              <img className="card-img-top" src="https://i.pravatar.cc/300" ></img>
              <div className="card-body" style={{borderRadiusTop: 24}}>
                <h5 className="card-title">{user.userName}</h5>
                <p className="card-text">{user.dob}</p>
                <p className="card-text">{user.email}</p>
                <p className="card-text">{user.contact}</p>
                <p className="card-text">{user.info}</p>
              </div>
            </div>
        )
      })}
    </div>
  )
}

export default Card
