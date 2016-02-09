import { Map } from 'immutable';
import { LOGIN } from '../actions/auth';


export const users = [
  {
    name: 'User #1',
    id:'--65q1FpAL_UQtVZ2PTGew'
  },
  {
    name:'User #2',
    id: '--0KsjlAThNWua2Pr4HStQ',
  },
  {
    name:'User #3',
    id: '--4fX3LBeXoE88gDTK6TKQ',
  },
  {
    name:'User #4',
    id: '--82_AVgRBsLw6Dhy8sEnA',
  },
  {
    name:'User #5',
    id: '--9jRaeY1xK-2l9r9fVQWA',
  }
];

const initialState = new Map({user: users[0].id});


export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state.set('user', action.user)
    default:
      return state
  }
}
