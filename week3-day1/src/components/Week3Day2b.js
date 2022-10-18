import '../App.css';
import React from "react"

const Week3Day2b = (props) => {
  const {data} = props
  return (
    <div className='grocery-cards'>
      <h2> This is made using passing props from Class to Functional(arg) </h2>
      {data.map((element) => {
        return (
          <div className='grocery-card'>
          <h4>{element.itemName}</h4>
          <h5>${element.price}</h5>
          <h5>Brand: {element.brand}</h5>
          </div>
        )
      })}
    </div>
  )
}

export default Week3Day2b
