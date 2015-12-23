import { combineReducers } from 'redux';
import reduceReducer from 'reduce-reducers';
import { routeReducer } from 'redux-simple-router'
import locations from './locations';
import visibilityFilter from './visibilityFilter';
import form from './form';

const rootReducer = combineReducers({
  locations,
  filter: visibilityFilter,
  form,
  routing: routeReducer
});

export default rootReducer;
