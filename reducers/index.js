import { combineReducers } from 'redux';
import reduceReducer from 'reduce-reducers';
import counter from './counter';
import players from './players';
import events from './events';
import lineups from './lineups';
import users from './users';
import router from './router';
import { routerStateReducer } from 'redux-router';

const routerComb = reduceReducer(
  routerStateReducer,
  router
);

const rootReducer = combineReducers({
  players,
  counter,
  lineups,
  users,
  eventsByPlayer: events,
  router: routerComb
});

export default rootReducer;
