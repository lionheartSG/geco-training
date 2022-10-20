import '../App.css';
import React from "react"
import PropTypes from "prop-types"

class Week3Day2c extends React.Component {

  render(){
    const {data} = this.props
    return(
      <div className='grocery-cards'>
        <h2> This is made using passing props from Class to Class (this) </h2>
      {data.map((element) => {
        return (
          <div key={element.id} className='grocery-card'>
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

Week3Day2c.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    itemName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
  }))
}

export default Week3Day2c;
