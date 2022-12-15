import * as actions from "./actionType"
import Axios from "axios"

export const addPlayerAction = (input) => {
  return dispatch => {
    Axios.get(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${input}`)
      .then(response => {
        dispatch(
          (data => {
            return {
              type: actions.ADD_PLAYER,
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

export const deletePlayerAction = (newVal) => {
  return {
    type: actions.DELETE_PLAYER,
    payload: newVal
  }
}

export const addGoalAction = (newVal) => {
  return {
    type: actions.ADD_GOAL,
    payload: newVal
  }
}
