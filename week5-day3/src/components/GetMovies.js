import "../App.css"
import React, { useState, useEffect } from "react"
import Axios from 'axios'

const GetMovies = () => {
  const [movies, setMovies] = useState()

  useEffect(() => {
    Axios.get(`https://www.omdbapi.com/?s=terminator&apikey=7fd2119a`)
    .then(response => {
      setMovies(response.data.Search)
    })

    .catch(err => {
      console.log(err)
    })
  }, []);

  const movieList = movies ? movies.map(movie => {
    return (
    <div>
      <p>{movie.Title}</p>
      <img src={movie.Poster} alt="" />
    </div>
    )
  }) : "This is not loading"



  return (
    <>
    Testing
    {movieList}
    </>
  )
}

export default GetMovies
