import "../App.css"
import React from "react"
import HOC from "./HOC"
import Hooks from "./Hooks"

const ComponentA = () => {
  return (
    <>
      <Hooks />
    </>
  )
}

export default HOC(ComponentA)
