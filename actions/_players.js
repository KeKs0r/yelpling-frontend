export const POINTS_CHANGE = 'POINTS_CHANGE';

export function pointsChange(playerIndex = 1, points = 3) {
  return {
    type: POINTS_CHANGE,
    player: playerIndex,
    score: points
  };
}
