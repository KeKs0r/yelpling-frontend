export const GAME_EVENT = 'GAME_EVENT';


export function gameEvent(playerIndex = 1, points = 3, name = 'Tor') {
  return {
    type: GAME_EVENT,
    event: {
      player: playerIndex,
      score: points,
      name: name
    }
  };
}
