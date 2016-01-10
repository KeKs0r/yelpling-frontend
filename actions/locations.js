// Filters
export const SHOW_ALL = 'SHOW_ALL';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SELECT_LOCATION = 'SELECT_LOCATION';

export const MYLOCATION_LOADED = 'MYLOCATION_LOADED';

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function clearVisibilityFilter(){
  return { type: SET_VISIBILITY_FILTER, filter: SHOW_ALL }
}

export function selectLocation(index) {
  return { type: SELECT_LOCATION, index }
}

export function loadMyLocation(){
  return dispatch => {
    const getLocation = (location) => {
      console.log(location);
      dispatch({type:MYLOCATION_LOADED, location});
    }
    navigator.geolocation.getCurrentPosition(getLocation);
  }
};
