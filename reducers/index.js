import { combineReducers } from 'redux';
import reduceReducer from 'reduce-reducers';
import locations from './locations';
import { routeReducer } from 'redux-simple-router'

const rootReducer = combineReducers({
  locations,
  routing: routeReducer
});

export default rootReducer;
