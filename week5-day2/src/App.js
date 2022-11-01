import React from "react"
import "./App.css"
import NaviBar from "./components/NaviBar"
import Footer from "./components/Footer"
import { Todo } from "./components/Todo"
import Display from "./components/Display"

const App = () => {
  return (
    <>
      <NaviBar bg="dark" customBackground="" variant="dark" />
      <div className="mainpage">
        <div className="left-page">
          <Todo />
        </div>
        <div className="right-page">
          <Display />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
