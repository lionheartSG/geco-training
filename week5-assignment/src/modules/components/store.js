import thunk from 'redux-thunk'
import {applyMiddleware, createStore} from 'redux'
import reducer from './reducer'

export const store = createStore(reducer, applyMiddleware(thunk))

store.subscribe(() => {
  console.log('state updated')
  console.log(store.getState())
})


// // import thunk from "redux-thunk"
// // import { applyMiddleware } from "redux"
// import { configureStore } from "@reduxjs/toolkit"
// import { combineReducers } from "redux"
// import reducerme from "./reducer"

// const reducer = combineReducers({ reducerme })

// export const store = configureStore({
//   reducer,
//   // middleware: getDefaultMiddleware =>
//   //   getDefaultMiddleware({
//   //     thunk: {

//   //     }
//   //   })
// })
