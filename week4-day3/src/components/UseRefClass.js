import '../App.css';
import React, { Component } from 'react';


// Uncontrolled
class UseRefClass extends Component {
  constructor () {
    super()
    this.name = React.createRef()
    this.age = React.createRef()
  }

  handleClick = (e) => {
    e.preventDefault()
    console.log(this.name)
    console.log(this.name.current.value)
    this.name.current.focus()
  }


  render(){
    return(
      <form>
        <input placeholder = "Please enter name" type="text" ref={this.name}></input>
        <button onClick={this.handleClick}>Submit</button>
      </form>
    )
  }
}

export default UseRefClass;
