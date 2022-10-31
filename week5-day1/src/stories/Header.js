import React from "react"
import PropTypes from "prop-types"
import "./Header.css"
import { useState } from "react"

export const Header = ({ login, backgroundColor, signIn }) => {

  return (
    <div className="header d-flex justify-content-between align-content-center" style={{ backgroundColor: backgroundColor }}>
      <a href="#default" className="logo">
        {login ? "Welcome" : "Please Log In" }
      </a>
        {login ? <button type="button" class="btn btn-danger" onClick={signIn}>
          Logout
        </button> : <button type="button" class="btn btn-danger" onClick={signIn}>
          Login
        </button>}
    </div>
  )
}

Header.PropTypes = {
  login: PropTypes.boolean,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func
}

Header.defaultTypes = {
  login: false,
  onClick: undefined
}
