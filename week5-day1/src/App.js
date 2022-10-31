import React, {useState} from "react"
import { Header } from "./stories/Header"
import "./App.css"
import { RecipeReviewCard } from "./stories/Card"
import { MyForm } from "./stories/MyForm"
import Footer from "./stories/Footer"

const App = () => {

  const [login, setLogin] = useState(false)

  const signIn = () => {
    login ? setLogin(false) : setLogin(true)
  }

  return (
    <div className="container">
      <Header backgroundColor="pink" login={login} signIn={signIn} />
      <MyForm buttontext="Pink is great" variant="danger" />
      <div className="d-flex justify-content-between">
        <RecipeReviewCard backgroundColor="#ffa6a6" photo="" />
        <RecipeReviewCard backgroundColor="#ffa6a6" />
        <RecipeReviewCard backgroundColor="#ffa6a6"/>
      </div>
      <Footer background="#ffb8b8" photo="Pound_layer_cake.jpg"/>
    </div>
  )
}

export default App
