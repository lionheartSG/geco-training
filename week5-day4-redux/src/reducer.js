import  * as actions from './actionType'
//central storage(state)
const initState = {
  count: 0,
  posts: []
}

console.log(initState.posts)

// reducer is a function and return application state

const reducer = (state = initState, action) => { //state can be any name
  switch(action.type) {
    case actions.INC:
      return {...state, count: state.count + action.payload }
    case actions.DEC:
      return {...state, count: state.count - action.payload }
    case actions.GET_POSTS:
      return {...state, posts: action.payload.httpResponse }
    default:
      return state
  }
}

export default reducer
