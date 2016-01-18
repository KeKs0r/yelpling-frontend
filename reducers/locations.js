import { Map } from 'immutable';
import { BUSINESS, BAR, REST, BAK } from '../constants';
import { SELECT_LOCATION, LOCATIONS_LOADED } from '../actions/locations';

const initialState = new Map({
  data: new Map(),
  selected: 0
});

export default function locations(state = initialState, action) {
  switch (action.type) {
    case SELECT_LOCATION:
      return state.set('selected', action.index);
    case LOCATIONS_LOADED:
      return state.update('data', (data) => {
        return data.withMutations((d) => {
            if(action.locations){
              action.locations.forEach((l) => {
                d.set(l.business_id, new Map(l));
              });
            }
            return d;
        });
      });
    default: return state;
  }
}
