import * as actions from "./actionType"
import { loadState } from "./LocalStorage"

const persistedState = loadState()

const initState = {
  players: persistedState
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.ADD_PLAYER:
      return {
        players: [...state.players, {...action.payload.httpResponse.player[0], goals: 0}]
      }
    case actions.DELETE_PLAYER:
      return {
        players: action.payload
      }

    case actions.ADD_GOAL:
      return {
        players: action.payload
      }

    default:
      return state
  }
}

export default reducer
