import { combineReducers } from 'redux';
import reduceReducer from 'reduce-reducers';
import { routeReducer } from 'redux-simple-router'

import locations from './locations';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  locations,
  filter: visibilityFilter,
  routing: routeReducer
});

export default rootReducer;
