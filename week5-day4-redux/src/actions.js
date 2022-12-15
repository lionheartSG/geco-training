//Write action methods here
import * as actions from "./actionType"
import Axios from "axios"

export const onIncrement = val => {
  return {
    type: actions.INC,
    payload: val
  }
}

export const onDecrement = val => {
  return {
    type: actions.DEC,
    payload: val
  }
}

export const onGetData = () => {
  return dispatch => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        dispatch(
          (data => {
            return {
              type: actions.GET_POSTS,
              payload: {
                httpResponse: data
              }
            }
          })(response.data)
        )
      })

      .catch(err => {
        console.log(err)
      })
  }
}
