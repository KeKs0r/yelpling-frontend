// Filters
export const SHOW_ALL = 'SHOW_ALL';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
// export const SUBMIT_VISIBILITY_FILTER = 'SUBMIT_VISIBILITY_FILTER';
// export const RESET_VISIBILITY_FILTER = 'RESET_VISIBILITY_FILTER';
// export const CLEAR_VISIBILITY_FILTER ='CLEAR_VISIBILITY_FILTER';

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter: filter }
}

// export function submitVisibilityFilter(filter) {
//   return { type: SUBMIT_VISIBILITY_FILTER, filter }
// }
//
// export function resetVisibilityFilter(filter) {
//   return { type: RESET_VISIBILITY_FILTER, filter }
// }

export function clearVisibilityFilter(){
  return { type: SET_VISIBILITY_FILTER, filter: SHOW_ALL }
}
