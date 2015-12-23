import { Map } from 'immutable';
import { SHOW_ALL, SET_VISIBILITY_FILTER, CLEAR_VISIBILITY_FILTER } from '../actions/filter';

// const exampleFilter = {
//   categories: [BAR, REST],
//   city: ['New York']
// }

// const initialState = SHOW_ALL;
const initialState = new Map({
  categories: ['Bar']
})

export default function visibilityFilter(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    case CLEAR_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}
