import { Map, Set } from 'immutable';
import { MYLOCATION_LOADED } from '../actions/locations'



export default function visibilityFilter(state = null, action) {
  switch (action.type) {
    case MYLOCATION_LOADED:
      return action.location
    default:
      return state
  }
}
