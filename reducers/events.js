import { GAME_EVENT } from '../actions/events';
import { Map, List } from 'immutable';


const initialState = new Map()
  .set(1, new List())
  .set(2, new List())
  .set(3, new List())
  .set(4, new List())
  .set(5, new List());

export default function events(state = initialState, action) {
  switch (action.type) {
  case GAME_EVENT:
    return state.update(action.event.player, (events) => {
      return events.push(action.event)
    });
  default:
    return state;
  }
}
