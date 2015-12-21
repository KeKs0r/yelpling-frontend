import { Map } from 'immutable';
import { BAR, REST } from '../constants';

const initialState = new Map()
  .set(1, new Map({
    id: 1,
    name: 'Hopfenreich',
    typ: BAR,
    image: 'http://mediadb.kicker.de/2016/fussball/spieler/l/39317_14_201572015240299.jpg'
  }))
  .set(2, new Map({
    id: 2,
    name: 'Schnelle Quelle',
    typ: BAR ,
    image: 'http://mediadb.kicker.de/2016/fussball/spieler/l/51570_14_201572015259706.jpg'
  }))
  .set(3, new Map({
    id: 3,
    name: 'Burgermeister',
    typ: REST,
    image: 'http://mediadb.kicker.de/2016/fussball/spieler/l/30669_14_20157201522554.jpg'
  }))


export default function locations(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
}
