import '../App.css';
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {onIncrement} from '../actions'

class Counter extends Component {

  handleIncrement = () => {
    this.props.onInc(2)
  }

  render(){
    return(
      <>
        {this.props.counter}
        <button onClick={this.handleIncrement}>Increment</button>
      </>
    )
  }
}

//get the data from store
//state is central storage area

const mapStateToProps = (state) => { //mapStatetoProps can be any name
  return {
    counter: state.count //counter can be a different name as well
  }
}


//this is to dispatch data to store. You don't send to reducer. you send to action.
//this dispatch will send to reducer.
const mapDispatchToProps = (dispatch) => {
  return {
    onInc: (val) => dispatch(onIncrement(val))
  }
}

//connect a HOC
export default connect(mapStateToProps, mapDispatchToProps) (Counter); //connect has two params(receive, dispatch)
