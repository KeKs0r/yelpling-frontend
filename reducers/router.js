import { REPLACE_IN_LINEUP } from '../actions/lineup';
import { Map, Set} from 'immutable';


export default function router(state = { location: {query:{}}}, action) {
  switch (action.type) {
  case REPLACE_IN_LINEUP:
    var newState = Object.assign({},state);
    delete newState.location.query.replace;
    return newState
    default:
    return state;
  }
}
