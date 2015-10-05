export const ADD_TO_LINEUP = 'ADD_TO_LINEUP';
export const REMOVE_FROM_LINEUP = 'REMOVE_FROM_LINEUP';


export function addToLineup(player, lineup = 1) {
  return {
    type: ADD_TO_LINEUP,
    lineup: lineup,
    player: player
  };
}
export function removeFromLineup(player, lineup = 1) {
  return {
    type: REMOVE_FROM_LINEUP,
    lineup: lineup,
    player: player
  };
}
