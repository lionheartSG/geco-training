import "../App.css"
import React from "react"
import Loading from "./Loading"

const ShowMovies = props => {
  const { movieData } = props
  const moviesList = movieData.length ? (
    movieData.slice(0, 5).map(movie => {
      return (
          <div className="movie-card" key={movie.imdbID}>
            <img src={movie.Poster} alt="" />
            <p>Name of Movie: {movie.Title}</p>
            <p>Year of Released: {movie.Year}</p>
        </div>
      )
    })
  ) : (
    <Loading />
  )

  return(
    <div className="movie-grid">
    {moviesList}
    </div>
  )
}

export default ShowMovies
