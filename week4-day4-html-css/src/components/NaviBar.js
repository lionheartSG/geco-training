import './NaviBar.css';
import React, { useState } from "react"
import {GiMagnifyingGlass} from "react-icons/gi"

const NaviBar = () => {
  return (
    <div className='navibar'>
      <ul>
        <img src="../../logo-2.png" alt="" />
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>

      </ul>
      <i><GiMagnifyingGlass/></i>
      <input id="search-bar" type="text" placeholder='Search'/>
    </div>
  )
}

export default NaviBar
