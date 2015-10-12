import { GAME_EVENT } from '../actions/events';
import { Map, List } from 'immutable';


const initialState = new Map();

export default function events(state = initialState, action) {
  switch (action.type) {
  case GAME_EVENT:
    return state.update(action.event.player, (events) => {
      let list = events;
      if(!list){
        list = new Map();
      }
      let event = action.event;
      event.player = action.event.player;
      return list.set(event.id, new Map(event));
    });
  default:
    return state;
  }
}
