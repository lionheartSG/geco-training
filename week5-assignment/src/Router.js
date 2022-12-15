import React from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import { TransparentHeader } from "./stories/Header.stories"
import { CustomGrey } from "./stories/Footer.stories"
import AboutUs from "./modules/components/AboutUs/AboutUs"
import MainPage from "./modules/components/MainPage/MainPage"
import ContactUs from "./modules/components/ContactUs/ContactUs"
import ScorePage from "./modules/components/ScorePage/ScorePage"
import Profile from "./modules/components/Profile/Profile"

const Router = () => {
  return (
    <>
      <TransparentHeader customBackground={"black"} />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/scorepage" element={<ScorePage />}></Route>
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
      <CustomGrey customBackground="black" customFontColor="white" />
    </>
  )
}

export default Router
