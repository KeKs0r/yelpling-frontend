import { POINTS_CHANGE } from '../actions/players';
import { Map } from 'immutable';

const GOAL = 'GOAL';
const DEF = 'DEF';
const MID = 'MID';
const ATT = 'ATT';


const initialState = new Map()
  .set(1, new Map({id: 1, name: 'Thomas Müller', price: 10, position: ATT }))
  .set(2, new Map({id: 1, name: 'Robert Lewandowski', price:11, position: ATT }))
  .set(3, new Map({id: 1, name: 'Manuel Neuer', price: 6, position: GOAL }))
  .set(4, new Map({id: 1, name: 'David Alaba', price: 7, position: DEF }))
  .set(5, new Map({id: 1, name: 'Mario Götze', price: 5, position: ATT }))


export default function players(state = initialState, action) {
  switch (action.type) {
  default:
    return state;
  }
}
