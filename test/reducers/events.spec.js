import expect from 'expect';
import events from '../../reducers/events';
import { GAME_EVENT } from '../../actions/events';

describe('reducers', () => {
  describe('events', () => {

    it('should handle initial state', () => {
      const initialState = events(undefined, {});
      expect(initialState.size).toBe(5)
    });

    it('should handle GAME_EVENT', () => {
      const state = events(undefined, {
        type: GAME_EVENT,
        event: {
          player:1,
          score: 3,
          name: 'Test Event'
        }
      });
      const playerEvents = state.get(1);
      expect(playerEvents.size).toBe(1);
    });

  });
});
