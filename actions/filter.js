// Filters
export const SHOW_ALL = 'SHOW_ALL';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const CLEAR_VISIBILITY_FILTER ='CLEAR_VISIBILITY_FILTER';

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function clearVisibilityFilter(){
  return { type: CLEAR_VISIBILITY_FILTER, SHOW_ALL }
}
