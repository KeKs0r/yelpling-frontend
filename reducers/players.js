import { POINTS_CHANGE } from '../actions/players';
import { Map } from 'immutable';

const GOAL = 'GOAL';
const DEF = 'DEF';
const MID = 'MID';
const ATT = 'ATT';


const initialState = new Map()
  .set(1, new Map({id: 1, name: 'Thomas Müller', price: 10, position: ATT }))
  .set(2, new Map({id: 2, name: 'Robert Lewandowski', price:11, position: ATT }))
  .set(3, new Map({id: 3, name: 'Manuel Neuer', price: 6, position: GOAL }))
  .set(4, new Map({id: 4, name: 'David Alaba', price: 7, position: DEF }))
  .set(5, new Map({id: 5, name: 'Mario Götze', price: 5, position: ATT }))
  .set(6, new Map({id: 6, name: 'Jerome Boateng', price: 5, position: DEF }))
  .set(7, new Map({id: 7, name: 'Arturo Vidal', price: 6, position: MID }))
  .set(8, new Map({id: 8, name: 'Joel Matip', price: 3, position: DEF }))
  .set(9, new Map({id: 9, name: 'Dante', price: 4, position: DEF }))
  .set(10, new Map({id: 10, name: 'Mats Hummels', price: 5, position: DEF }))
  .set(11, new Map({id: 11, name: 'Julian Draxler', price: 4, position: MID }))
  .set(12, new Map({id: 12, name: 'Andre Schürle', price: 5, position: MID }))
  .set(13, new Map({id: 13, name: 'Max Kruse', price: 3, position: ATT }))
  .set(14, new Map({id: 14, name: 'Bas Dost', price: 2, position: ATT }))
  .set(15, new Map({id: 15, name: 'Matthias Ginter', price: 1, position: DEF }))
  .set(16, new Map({id: 16, name: 'Ilkay Gündogan', price: 3, position: MID }))
  .set(17, new Map({id: 17, name: 'Marco Reus', price: 5, position: MID }))


export default function players(state = initialState, action) {
  switch (action.type) {
  default:
    return state;
  }
}
