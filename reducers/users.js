import { RANKINGS_POINTS_CHANGE } from '../actions/users'
import {  Map } from 'immutable';

import fixtures from './fixtures/users.js';
let i = 0;
const init = new Map();
const initialState = init.withMutations((m) => {
    fixtures.results.forEach((user) => {
      const u = user.user;
      m.set(i, new Map({
        id: i,
        name: u.name.first + ' ' +u.name.last,
        username: u.username,
        image: u.picture.thumbnail,
        stats: new Map({
          score: 0
        })
      }))
      i++;
    })
    return m;
})


export default function players(state = initialState, action) {
  switch (action.type) {
  case RANKINGS_POINTS_CHANGE:
    return state.update(action.user, (user) => {
      if(!user){
        console.error('User not defined:'+action.user);
      }
      return user.setIn(['stats','score'], user.getIn(['stats','score']) + action.score);
    });
  default:
    return state;
  }
}
