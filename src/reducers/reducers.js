import { combineReducers } from 'redux'
import ActionConstants from '../actions/ActionConstants'

function people(state = [], action) {
  switch (action.type) {
    case ActionConstants.ADD_NAMES:
      return [ ...action.names, ...state ]

    default:
      return state
  }
}

function isLoading(state = true, action) {
  switch (action.type) {
    case ActionConstants.LOADING:
      return action.isLoading

    default:
      return state
  }
}

/*
function currentPersonId(state = {}, action){
  switch(action.type){
    case ActionConstants.DISPLAY_PERSON:
      return {
        ...state,
        currentPersonId: action.personId
      }

    default: state
  }
}
*/

const rootReducer = combineReducers({
  isLoading,
  people
})

export default rootReducer
