import "./ScorePage.css"
import React, { useState } from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { useSelector, useDispatch } from "react-redux"
import { addPlayerAction } from "../actions"
import { deletePlayerAction } from "../actions"
import { addGoalAction } from "../actions"
import { Link } from "react-router-dom"

const ScorePage = () => {

  const [input, setInput] = useState()
  const dispatch = useDispatch()

  const onChange = e => {
    setInput(e.target.value)
  }

  const addPlayer = () => {
    dispatch(addPlayerAction(input))
  }

  const deletePlayer = (id) => {
    const newList = players.filter(player => player.strThumb !== id)
    dispatch(deletePlayerAction(newList))
  }

  const addGoal = (id) => {
    const updatedList = players.map((player) => {
      if (player.strThumb === id) {
        return {...player, goals: player.goals + 1 }
      }
      return player
    })
    dispatch(addGoalAction(updatedList))
  }

  const players = useSelector(state => state.players)

  const playerList = players.length
    ? players.sort((a,b) => (a.goals < b.goals) ? 1 : -1).map(player => {
        return (
          <div className="card-player" key={player.strThumb}>
            <Link to={`/profile/${player.idAPIfootball}`}><img src={player.strThumb}/></Link>
            <div className="card-player-infos" style={{width: '250px'}}>
              <h2>Name: {player.strPlayer} </h2>
              <p style={{color: 'red'}}>Goal Scored: {player.goals}</p>
              <p>Click below to add goal</p><span><i className="fa-solid fa-plus" onClick={() => addGoal(player.strThumb)}></i></span>
            </div>
            <Button variant="contained" sx={{ width: 100, padding: 1, margin: 2, backgroundColor: 'red'}} onClick={() => deletePlayer(player.strThumb)}>
              Delete
            </Button>
          </div>
        )
      })
    : "Not yet"

  return (
    <div className="score-page">
      <div className="score-page-left">
        <h1>Input a player name to add</h1>
        <TextField id="add-player" label="Add Player" variant="outlined" onChange={onChange} />
        <Button variant="contained" sx={{ width: 200, padding: 1, margin: 2 }} onClick={addPlayer}>
          Add Player
        </Button>
      </div>
      <div className="score-page-right">
        <h1>Leaderboard</h1>
        {playerList}
      </div>
    </div>
  )
}

export default ScorePage
