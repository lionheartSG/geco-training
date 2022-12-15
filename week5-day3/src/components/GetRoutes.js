import "../App.css"
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NaviBar from "./NaviBar"
import About from "./About"
import GetMovies from "./GetMovies"
import Main from "./Main"

const GetRoutes = () => {
  return (
    <BrowserRouter>
      <NaviBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie" element={<GetMovies />} />
      </Routes>
    </BrowserRouter>
  )
}

export default GetRoutes
