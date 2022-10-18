import '../App.css';
import { Component } from 'react';

class Week3Day2c extends Component {

  render(){
    const {data} = this.props
    return(
      <div className='grocery-cards'>
        <h2> This is made using passing props from Class to Class (this) </h2>
      {data.map((element) => {
        return (
          <div className='grocery-card'>
          <h4>{element.itemName}</h4>
          <h5>${element.price}</h5>
          <h5>Brand: {element.brand}</h5>
          </div>
        )
      })}
    </div>
    )
  }
}

export default Week3Day2c;
