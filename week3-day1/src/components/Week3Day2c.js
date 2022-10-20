import '../App.css';
import { Component } from 'react';
// import PropTypes from 'prop-types';

class Week3Day2c extends Component {

  // const isEmail = function (props, propName, componentName) {
  //   let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  //   if (!regex.test(props[propName])
  //     return Error("Invalid email")
  // }

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

  // Week3Day2c.propTypes = {
  //   firstName: propTypes.string.isRequired,
  //   age: propTypes.number.isRequired,
  //   desgination: propTypes.string.isRequired,
  //   strOrNum: propTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  //   arrayOfNum: PropTypes.arrayOf([PropTypes.number]),
  //   arrOfObject: PropTypes.arrayOf(PropTypes.shape({
  //     name: PropTypes.string.isRequired,
  //     id: PropTypes.number.isRequired
  //   }))
  //   emails: isEmail()
  // }

  // Week3Day2c.defaultProps = {
  //   firstName: 'Alex',
  //   age: 20,
  //   etc....
  // }

  //

  // customProp: function(props, propName, componentName) {
  //   if (!/matchme/.test(props[propName])) {
  //     return new Error(
  //       'Invalid prop `' + propName + '` supplied to' +
  //       ' `' + componentName + '`. Validation failed.'
  //     );
  //   }
  // },

//   customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
//     if (!/matchme/.test(propValue[key])) {
//       return new Error(
//         'Invalid prop `' + propFullName + '` supplied to' +
//         ' `' + componentName + '`. Validation failed.'
//       );
//     }
//   })
// };

}

//datatype of prop value(expected)



export default Week3Day2c;
