import { ADD_TO_LINEUP, REMOVE_FROM_LINEUP, REPLACE_IN_LINEUP } from '../actions/lineup';
import { Map, Set} from 'immutable';

export const system = {
  GOAL: 1,
  DEF: 4,
  MID: 4,
  ATT: 2
};


const initialState = new Map()
  .set(1, new Map({user: 1, players: new Set([1,3,5])}))
  .set(2, new Map({players: new Set()}))
  .set(3, new Map({players: new Set()}))
  .set(4, new Map({players: new Set()}))
  .set(5, new Map({players: new Set()}));

export default function lineups(state = initialState, action) {
  switch (action.type) {
  case ADD_TO_LINEUP:
    return state.updateIn([action.lineup, 'players'], (p) => {
      return p.add(action.player)
    });
  case REMOVE_FROM_LINEUP:
    return state.updateIn([action.lineup, 'players'], (p) => {
      return p.remove(action.player)
    });
  case REPLACE_IN_LINEUP:
    return state.updateIn([action.lineup, 'players'], (p) => {
      return p.remove(action.toReplace).add(action.player)
    });
    default:
    return state;
  }
}
