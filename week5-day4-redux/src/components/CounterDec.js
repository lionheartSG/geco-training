import '../App.css';
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {onDecrement} from '../actions'

class CounterDec extends Component {

  handleClick = () => {
    this.props.onDec(1)
  }

  render(){
    return(
      <>
        <button onClick={this.handleClick}>Decrement</button>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDec: (val) => dispatch(onDecrement(val))
  }
}

export default connect(null, mapDispatchToProps)(CounterDec);
