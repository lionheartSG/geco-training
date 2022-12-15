import '../App.css';
import React from "react"
import {useSelector, useDispatch } from 'react-redux'
import { onIncrement } from '../actions';

const CounterFunction = () => {
  const counter = useSelector(state => state.count)
  const post = useSelector (state => state.post)

  const dispatch = useDispatch()

  const handleInc = () => {
    dispatch(onIncrement(2))
  }

  return (
    <>
      {counter}
      <button onClick={handleInc}>Using Function Counter Component</button>
    </>
  )
}

export default CounterFunction
