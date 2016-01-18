// Filters
export const SHOW_ALL = 'SHOW_ALL';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SELECT_LOCATION = 'SELECT_LOCATION';

export const MYLOCATION_LOADED = 'MYLOCATION_LOADED';
export const LOCATIONS_LOADED = 'LOCATIONS_LOADED';

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function clearVisibilityFilter(){
  return { type: SET_VISIBILITY_FILTER, filter: SHOW_ALL }
}

export function selectLocation(index) {
  return { type: SELECT_LOCATION, index }
}

export function loadLocations(){
  return dispatch => {
    return fetch('http://localhost:7381').then(
        (res) => res.json(),
      ).then(
        (locations) => { dispatch({type:LOCATIONS_LOADED, locations})}
      ).catch((err) => {console.error(err)})
  }
}

export function loadMyLocation(){
  return dispatch => {
    const getLocation = (location) => {
      dispatch({type:MYLOCATION_LOADED, location});
    }
    navigator.geolocation.getCurrentPosition(getLocation);
  }
};
