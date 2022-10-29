import "../App.css"
import React, { useState } from "react"

const superHeroes = [
  {
    id: 1,
    user: "superman",
    power: "Sun"
  },
  {
    id: 2,
    user: "batman",
    power: "Bat Mobile"
  },
  {
    id: 3,
    user: "wonderwoman",
    power: "Lasso of Truth"
  },
  {
    id: 4,
    user: "flash",
    power: "Speed Force"
  }
]

const Hooks = () => {
  const [booleanState, setBooleanState] = useState(true)
  const [arrayState, setArrayState] = useState([1, 2, 3, 4])
  const [stringState, setStringState] = useState("Hello World")
  const [numState, setNumState] = useState(1)
  const [functionState, setFunctionState] = useState(() => {
    console.log("This function is stored in state")
  })
  const [sideKick, setSideKick] = useState({
    name: "Robin",
    power: "Martial Arts"
  })
  const [heroes, setHeroes] = useState(superHeroes)

  console.log(booleanState)
  console.log(arrayState)
  console.log(stringState)
  console.log(numState)
  functionState // To call a function via state

  const changeSideKick = () => {
    if (sideKick.name === "Robin") {
      setSideKick({
        name: "Superboy",
        power: "Laser eyes",
        backgroundColor: "blue"
      })
    } else {
      setSideKick({
        name: "Robin",
        power: "Martial Arts",
        backgroundColor: "red"
      })
    }
  }

  const updateSecondIndex = () => {
    const newState = heroes.map(obj => {
      if (obj.id === 2) {
        if (obj.power === "Bat Mobile") {
          return { ...obj, power: "Robin Sidekick" }
        } else {
          return { ...obj, power: "Bat Mobile" }
        }
      }
      return obj
    })
    setHeroes(newState)
  }

  return (
    <>
      {heroes.map(obj => {
        return (
          <div key={obj.id} className="hero-card">
            <p>Userid: {obj.id}</p>
            <p>Hero Name: {obj.user}</p>
            {obj.id === 2 ? <p style={{ backgroundColor: "blue", color: "white" }}>Hero Power: {obj.power}</p> : <p>Hero Power: {obj.power}</p>}
          </div>
        )
      })}
      <div className="side-kick">
        <p style={{ backgroundColor: sideKick.backgroundColor, color: "white" }}>{sideKick.name}</p>
        <p style={{ backgroundColor: sideKick.backgroundColor, color: "white" }}>{sideKick.power}</p>
        <p> This is for question 3b - Create an object and update its two property values </p>
      </div>
      <button onClick={updateSecondIndex}>Batman new power</button>
      <button onClick={changeSideKick}>Change Side Kick</button>
    </>
  )
}

export default Hooks
