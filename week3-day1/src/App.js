import './App.css';
import { Component } from 'react';

// App is class-component
class App extends Component {
  state = {
    firstName: 'alina',
    age: 30,
    designation: 'developer',
    arr: [89, 78, 56]
  }

  //treated like a property
  handleClick = () => {
    this.setState({
      age: 35,
      designation: 'Engineer',
    })
  }

  //lifecycle method
  render(){
    return(
    <div>
      Hello World. This is a state example. Her name is {this.state.firstName}. Her age is {this.state.age}. Her designation is {this.state.designation}
      <button onClick={this.handleClick}>Update</button>
    </div>
    )
  }
}

export default App;
