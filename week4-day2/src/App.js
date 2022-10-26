import "./App.css"
import React, { Component } from "react"
import Axios from "axios"
import ShowMovies from "./components/ShowMovies"
import Score from "./components/Score"

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
    }
  }

  // componentDidMount = () => {
  //   Axios.get(`https://www.omdbapi.com/?s=terminator&apikey=7fd2119a`)
  //   .then(response => {
  //     this.setState({
  //       movies: response.data.Search
  //     })
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }

  render() {
    return (
      <>
        <ShowMovies movieData={this.state.movies} />
        <Score/>
      </>
    )
  }
}

export default App
