import React from "react"

function Week1Day3() {

  const firstName = "Abdul"
  const lastName = "Rafi"
  const libraryBook = {
    book: "Introduction to JavaScript",
    dateBorrowed: "09/10/2022",
    dateToReturn: "19/10/2022"
  }

  return (
    <div className="App">
    <header className="App-header">
        <p>{`Your name is ${firstName} ${lastName}`}</p>
        <p>{`Book borrowed: ${libraryBook.book}`}</p>
        <p>{`Date of borrow: ${libraryBook.dateBorrowed}`}</p>
        <p>{`Date to be returned: ${libraryBook.dateToReturn}`}</p>
    </header>
  </div>
  )
}

export default Week1Day3
