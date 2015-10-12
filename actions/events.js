export const GAME_EVENT = 'GAME_EVENT';

let counter = 0;

export function gameEvent(playerIndex = 1, points = 3, name = 'Tor') {
  counter++;
  return {
    type: GAME_EVENT,
    event: {
      id: Math.floor(Math.random() * 999999),
      player: playerIndex,
      score: points,
      name: name,
      timestamp: counter
    }
  };
}
