import { POINTS_CHANGE } from '../actions/players';
import Immutable from 'immutable';


const initialState = Immutable.fromJS([
  {id: 1, name: 'Thomas Müller', score: 0 },
  {id: 2, name: 'Robert Lewandowski', score: 0},
  {id: 3, name: 'Manuel Neuer', score: 0},
  {id: 4, name: 'David Alaba', score: 0},
  {id: 5, name: 'Mario Götze', score: 0}
]);

export default function players(state = initialState, action) {
  switch (action.type) {
  case POINTS_CHANGE:
    return state.update(action.player, (p) => {
      return p.set('score', p.get('score') + action.score);
    });
  default:
    return state;
  }
}
