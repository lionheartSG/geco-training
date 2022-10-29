//controlled input - We should always do controlled input for e.g. validation.
//uncontrolled input

import '../App.css';
import React, { useRef } from "react"

const UseRefFunctional = () => {
  const firstName = useRef()
  console.log(firstName)

  const handleClick = (e) => {
    e.preventDefault()
    console.log(firstName)
  }

  return (
    <>
      <form>
        <input placeholder = "Please enter name (from functional)" type="text" ref={firstName}></input>
        <button onClick={handleClick}>Submit</button>
      </form>
    </>
  )
}

export default UseRefFunctional
