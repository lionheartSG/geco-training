import "./Banner.css"
import React from "react"
import {Link} from 'react-router-dom'

const Banner = () => {
  return (
    <>
      <div className="banner" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(https://img.olympicchannel.com/images/image/private/t_16-9_1240-700/f_auto/v1538355600/primary/pyqaawxxfwzeiib35hsm)`}}>
        <div className="container">
          <h1>
            Track the score of your favourite player
          </h1>
          <p>One stop solution for your every football need</p>
          <Link to='/scorepage' className="btn btn-flat" href="#">
            Enter Score Page
          </Link>
        </div>
      </div>
    </>
  )
}

export default Banner
