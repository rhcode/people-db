import ActionConstants from '../actions/ActionConstants'

export function names(state = {}, action) {
  switch (action.type) {
    case ActionConstants.ADD_NAMES:
      return action.names

    default:
      return state
  }
}

export function displayName(state = {}, action) {
  switch (action.type) {
    case ActionConstants.DISPLAY_NAME:
      console.log(action.personName)
      return action.personName

    default:
      return state
  }
}
