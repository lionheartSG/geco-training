import "../App.css"
import React, { Component } from "react"
import Modal from "./Modal"

class Score extends Component {
  constructor() {
    super()
    this.state = {
      score: 0
    }
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (this.state.score < nextState.score) {
      return true //if return true, "componentDidUpdate" will run. if return false, it will not run.
    } else {
      this.setState({
        score: this.state.score
      })
      return false
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    alert(`Component Updated. Your previous score: ${prevState.score} New Score: ${this.state.score}`)
  }

  handleSubmit = e => {
    e.preventDefault()
    const element = document.getElementById("score").value
    this.setState({
      score: element
    })
    console.log(this.state.score)
  }

  render() {
    return (
      <>
        <h3>Current score: {this.state.score}</h3>
        <form>
          <label htmlFor="score">New Score:</label>
          <input type="number" id="score" name="score"></input>
        </form>
        <Modal scoreData={this.state.score} handleSubmit={this.handleSubmit}/>
      </>
    )
  }
}

export default Score
