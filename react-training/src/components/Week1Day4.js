import React, {useState, useEffect} from 'react'


function Week1Day4() {

  const getName = (name = "guest") => setWelcome(`Hello ${name}`)

  const [info, setInfo] = useState()
  const [welcome, setWelcome] = useState()

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
    .then(response => response.json())
    .then(data => {
        setInfo(data.fact)
        getName("Rafi")
    })
  },[])

  return (
    <div className="mt-5 container d-flex flex-column bg-primary bg-gradient justify-content-center align-items-center">
      <h1 className="text-danger">{welcome}</h1>
      <div><h1>This is a fact about cats</h1></div>
      <div className="mb-4 info bg-secondary bg-gradient">{info}</div>
    </div>
)


}

export default Week1Day4
