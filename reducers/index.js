import { combineReducers } from 'redux';
import counter from './counter';
import players from './players';
import events from './events';
import lineups from './lineups';

const rootReducer = combineReducers({
  players,
  counter,
  lineups,
  eventsByPlayer: events
});

export default rootReducer;
