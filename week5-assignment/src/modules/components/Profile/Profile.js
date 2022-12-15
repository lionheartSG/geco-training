import "./Profile.css"
import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

const Profile = () => {
  const { id } = useParams()
  const players = useSelector(state => state.players)

  const player = players.filter(player => player.idAPIfootball === id)

  const playerProfile = player.map(p => {
    return (
      <div className="profile-page">
        <div className="profile-card">
          {p.strBanner ? <img src={p.strBanner} alt="" /> : <img src='https://www.gpshealthonline.com/static/images/no-banner.jpg' />}
          <p>{p.strDescriptionEN}</p>
        </div>
      </div>
    )
  })

  return <>{playerProfile}</>
}

export default Profile
