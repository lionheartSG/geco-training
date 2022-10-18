import "./App.css"
import { Component } from "react"
// import Week3Day1 from "./components/Week3Day1"
// import Display from "./Display"
import Week3Day2a from "./components/Week3Day2a"
import Week3Day2b from "./components/Week3Day2b"
import Week3Day2c from "./components/Week3Day2c"

// App is class-component
class App extends Component {
  // state = {
  //   firstName: "alina",
  //   age: 30,
  //   designation: "developer",
  //   arr: [89, 78, 56]
  // }

  // //treated like a property
  // handleClick = () => {
  //   this.setState({
  //     age: 35,
  //     designation: "Engineer"
  //   })
  // }

  //lifecycle method
  //render method is called everytime when state changes

  groceryData = [
    {
      itemName: 'Rice',
      price: 20,
      brand: "NTUC",
    },
    {
      itemName: 'Mayonnaise',
      price: 7,
      brand: "Sheng Siong",
    },
    {
      itemName: 'Ice Cream',
      price: 9.90,
      brand: "Magnolia",
    },
    {
      itemName: 'Chicken Patty',
      price: 11,
      brand: "Farmway",
    },
  ]


  render() {
    return (
      <div className="container">
        {/* Hello World. This is a state example. Her name is {this.state.firstName}. Her age is {this.state.age}. Her designation is {this.state.designation}
      <button onClick={this.handleClick}>Update</button> */}
        {/* <Week3Day1 /> */}
        <Week3Day2a />
        <Week3Day2b data={this.groceryData}/>
        <Week3Day2c data={this.groceryData}/>
        {/* <Display data={this.state} secondData={this.state2}/> */}
        {/* This is how to assign attribute */}
      </div>
    )
  }
}

export default App
