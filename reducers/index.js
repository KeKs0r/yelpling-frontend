import { combineReducers } from 'redux';
import counter from './counter';
import players from './players';
import events from './events';
import lineups from './lineups';
import { routerStateReducer } from 'redux-router';

const rootReducer = combineReducers({
  players,
  counter,
  lineups,
  eventsByPlayer: events,
  router: routerStateReducer
});

export default rootReducer;
