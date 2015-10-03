import { createSelector } from 'reselect';

function selectTodos(players, events) {
    return players.map(p => {
      const pEvents = events.get(p.get('id'));
      return p.set('events', pEvents)
              .set('score',
                pEvents.reduce((r, v) => {
                  return r + v.score;
                },0));
    })
}

/*
 * Definition of input-selectors.
 * Input-selectors should be used to abstract away the structure
 * of the store in cases where no calculations are needed
 * and memoization wouldn't provide any benefits.
 */
const players = state => state.players;
const events = state => state.eventsByPlayers;

/*
 * Definition of combined-selector.
 * In visibleTodosSelector, input-selectors are combined to derive new information.
 * To prevent expensive recalculation of the input-selectors memoization is applied.
 * Hence, these selectors are only recomputed when the value of their input-selectors change.
 * If none of the input-selectors return a new value, the previously computed value is returned.
 */
export const playersWithEventsSelector = createSelector(
  players,
  events,
  (players, events) => {
    return {
      playersWithEvents: selectTodos(players, events)
    };
  }
);
