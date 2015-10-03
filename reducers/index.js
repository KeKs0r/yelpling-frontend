import { combineReducers } from 'redux';
import counter from './counter';
import players from './players';
import events from './events';

const rootReducer = combineReducers({
  players,
  counter,
  eventsByPlayer: events
});

export default rootReducer;
