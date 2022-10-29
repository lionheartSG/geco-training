import '../App.css';
import React, { useState, useEffect } from "react"

const Searchbox = ({movieData, setFilteredMovie}) => {
  const [value, setValue] = useState("")

  const handleChange = e => {
    setValue(e.currentTarget.value)
  }
  
  useEffect(() => {
    setFilteredMovie(
      movieData.filter((movie) => {
        return movie.Title.toLowerCase().includes(value);
      })
    );
  }, [value]);


  return (
    <>
      <form>
        <label htmlFor=""><strong>Search Bar</strong></label><br />
        <input value={value} type="search" placeholder='Search' onChange={handleChange}/>
      </form>
    </>
  )
}

export default Searchbox
