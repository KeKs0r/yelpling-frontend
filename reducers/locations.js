import { Map } from 'immutable';
import { BUSINESS, BAR, REST, BAK } from '../constants';
import { SELECT_LOCATION, LOCATIONS_LOADED } from '../actions/locations';

const initialState = new Map({
  businesses: new Map(),
  recommendations: new Map(),
  selected: 0
});

export default function locations(state = initialState, action) {
  switch (action.type) {
    case SELECT_LOCATION:
      return state.set('selected', action.index);
    case LOCATIONS_LOADED:
    const data = action.data;
    const user = action.user;
    return state.withMutations((d) => {
            if(data && data.businesses){
              data.businesses.forEach((l) => {
                d.setIn(['businesses',l.yelp_id], new Map(l));
              });
            }
            if(data && data.recommendations){
              const rec = data.recommendations;
              for (var id in rec) {
                  if (rec.hasOwnProperty(id)) {
                      d.setIn(['recommendations', user, id], rec[id]);
                  }
              }
            }
            return d;
      });
    default: return state;
  }
}
