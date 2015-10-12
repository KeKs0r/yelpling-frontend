export const RANKINGS_POINTS_CHANGE = 'RANKINGS_POINTS_CHANGE';

export function rankingPointsChange(user = 1, points = 3) {
  return {
    type: RANKINGS_POINTS_CHANGE,
    user: user,
    score: points
  };
}
