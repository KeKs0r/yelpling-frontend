import { Map } from 'immutable';
import { LOGIN } from '../actions/auth';

const initialState = new Map({user: '15SdjuK7DmYqUAj6rjGowg'});


export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state.set('user', action.user)
    default:
      return state
  }
}
