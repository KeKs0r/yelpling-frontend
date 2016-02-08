import data from './data.js';
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


export function loadLocations(user){
  //const url = `http://iosl.bergner.fr/api/v1/users/${user}/recommendations`;
  const url = 'http://localhost:7381'
  return dispatch => {
    return fetch(url).then(
        //(res) => res.json(),
        (res) => data
      ).then(
        (data) => { dispatch({type:LOCATIONS_LOADED, data, user})}
      ).catch((err) => {console.error(err)})
  }
}

export function loadMyLocation(){
  return dispatch => {
    const getLocation = (location) => {
      dispatch({type:MYLOCATION_LOADED, location});
    }
    getLocation({
      coords: {
        latitude: 49.0035,
        longitude: 8.3958208
      }
    })
    //navigator.geolocation.getCurrentPosition(getLocation);
  }
};
