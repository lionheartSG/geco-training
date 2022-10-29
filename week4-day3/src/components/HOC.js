import '../App.css';
import React, { useState } from "react"


//colorChanger
const HOC = (Propspect) => {
  const color = ['pink', 'blue', 'orange', 'green']
  const randomColor = color[Math.floor(Math.random() * 4)]

  return () => {
    return (
      <div className="d-flex justify-content-center align-items-center" style = {{ backgroundColor: randomColor, height: 'auto'} }>
        <Propspect />
      </div>
    )
  }
}

export default HOC


// onClick = {(e) => setFirstName({...person, age: 40})}
