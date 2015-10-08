import {
  POINTS_CHANGE
}
from '../actions/players';
import {
  Map
}
from 'immutable';
import {
  GOAL, DEF, MID, ATT
}
from '../constants';

const initialState = new Map()
  .set(1, new Map({
    id: 1,
    name: 'Thomas Müller',
    price: 10,
    position: ATT,
    image: 'http://mediadb.kicker.de/2016/fussball/spieler/l/39317_14_201572015240299.jpg'
  }))
  .set(2, new Map({
    id: 2,
    name: 'Robert Lewandowski',
    price: 11,
    position: ATT,
    image: 'http://mediadb.kicker.de/2016/fussball/spieler/l/51570_14_201572015259706.jpg'
  }))
  .set(3, new Map({
    id: 3,
    name: 'Manuel Neuer',
    price: 6,
    position: GOAL,
    image: 'http://mediadb.kicker.de/2016/fussball/spieler/l/30669_14_20157201522554.jpg'
  }))
  .set(4, new Map({
    id: 4,
    name: 'David Alaba',
    price: 7,
    position: DEF,
    image: 'http://mediadb.kicker.de/2016/fussball/spieler/l/57598_14_2015720153580.jpg'
  }))
  .set(5, new Map({
    id: 5,
    name: 'Mario Götze',
    price: 5,
    position: MID,
    image: 'http://mediadb.kicker.de/2016/fussball/spieler/l/43592_14_201572015247823.jpg',
    stats: {
      played: 12,
      score: 260
    }
  }))
  .set(6, new Map({
    id: 6,
    name: 'Jerome Boateng',
    price: 5,
    position: DEF,
    image: 'http://mediadb.kicker.de/2016/fussball/spieler/l/39295_14_20157201524021.jpg'
  }))
  .set(7, new Map({
    id: 7,
    name: 'Arturo Vidal',
    price: 6,
    position: MID,
    image: 'http://mediadb.kicker.de/2016/fussball/spieler/l/44169_14_2015729102722352.jpg'
  }))
  .set(8, new Map({
    id: 8,
    name: 'Joel Matip',
    price: 3,
    position: DEF,
    image: 'http://mediadb.kicker.de/2016/fussball/spieler/l/57147_2_20157201533169.jpg'
  }))
  .set(9, new Map({
    id: 9,
    name: 'Dante',
    price: 4,
    position: DEF,
    image: 'http://mediadb.kicker.de/2016/fussball/spieler/l/33694_24_201592154811156.jpg'
  }))
  .set(10, new Map({
    id: 10,
    name: 'Mats Hummels',
    price: 5,
    position: DEF,
    image: 'http://mediadb.kicker.de/2016/fussball/spieler/l/40152_17_201572015241944.jpg'
  }))
  .set(11, new Map({
    id: 11,
    name: 'Julian Draxler',
    price: 4,
    position: MID,
    image: 'http://mediadb.kicker.de/2016/fussball/spieler/l/54639_24_201592154814822.jpg'
  }))
  .set(12, new Map({
    id: 12,
    name: 'Andre Schürle',
    price: 5,
    position: MID,
    image: 'http://mediadb.kicker.de/2016/fussball/spieler/l/51275_24_201572015258564.jpg'
  }))
  .set(13, new Map({
    id: 13,
    name: 'Max Kruse',
    price: 3,
    position: ATT,
    image: 'http://mediadb.kicker.de/2016/fussball/spieler/l/41678_24_20157201524493.jpg'
  }))
  .set(14, new Map({
    id: 14,
    name: 'Bas Dost',
    price: 2,
    position: ATT,
    image: 'http://mediadb.kicker.de/2016/fussball/spieler/l/73112_24_201572015340307.jpg'
  }))
  .set(15, new Map({
    id: 15,
    name: 'Matthias Ginter',
    price: 1,
    position: DEF,
    image: 'http://mediadb.kicker.de/2016/fussball/spieler/l/70990_17_20157201533581.jpg'
  }))
  .set(16, new Map({
    id: 16,
    name: 'Ilkay Gündogan',
    price: 3,
    position: MID,
    image: 'http://mediadb.kicker.de/2016/fussball/spieler/l/48408_17_201572015253887.jpg'
  }))
  .set(17, new Map({
    id: 17,
    name: 'Marco Reus',
    price: 5,
    position: MID,
    image: 'http://mediadb.kicker.de/2016/fussball/spieler/l/46429_17_20157201525193.jpg'
  }))
  .map((p) => {
    return p.set('stats', new Map({
          played: Math.floor(Math.random() * 13),
          score: Math.floor(Math.random() * 150) + 80,
          last: Math.floor(Math.random() *  40) - 5,
          prelast: Math.floor(Math.random() *  40) - 5,
          price: Math.floor(Math.random() * 8)
        }))
  });


export default function players(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
}
