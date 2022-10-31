import React, { useState } from "react"
import { Header } from "./stories/Header"
import "./App.css"
import Card from "./stories/Card"

const App = () => {
  return (
    <div>
      <Header backgroundColor="pink" />
      <Card />
    </div>
  )
}

export default App
