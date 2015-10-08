import { combineReducers } from 'redux';
import reduceReducer from 'reduce-reducers';
import counter from './counter';
import players from './players';
import events from './events';
import lineups from './lineups';
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
  eventsByPlayer: events,
  router: routerComb
});

export default rootReducer;
