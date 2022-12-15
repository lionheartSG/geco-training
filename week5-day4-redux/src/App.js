import React from "react"
import "./App.css"
import Counter from "./components/Counter"
import CounterDec from "./components/CounterDec"
import ApiData from "./components/ApiData"
import CounterFunction from "./components/CounterFunction"

const App = () => {
  return (
    <div>
      <CounterFunction />
      <Counter />
      <CounterDec />
      <ApiData />
    </div>
  )
}

export default App

//change Root error
