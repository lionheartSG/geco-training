import React from "react"
import PropTypes from "prop-types"
import "./Header.css"

export const Header = ({login, backgroundColor}) => {
  return (
    <div class="header" style={{backgroundColor: backgroundColor}}>
      <a href="#default" class="logo">
        { login ? "Welcome" : "Please Log In" }
      </a>
      <div class="header-right">
        <a class="active" href="#home">
          Home
        </a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  )
}

Header.PropTypes = {
  login: PropTypes.boolean,
  backgroundColor: PropTypes.string
}

Header.defaultTypes = {
  login: false,
}
