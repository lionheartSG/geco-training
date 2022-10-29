import React from "react"
import "./App.css"
import PageWithTwoComponents from "./components/PageWithTwoComponents"
import SymDif from "./components/SymDif"
import Particulars from "./components/Particulars"

const App = () => {
  return (
    <>
      <PageWithTwoComponents />
      <SymDif />
      <Particulars />
    </>
  )
}

export default App
