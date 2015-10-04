import expect from 'expect';
import lineups from '../../reducers/lineup';
import { ADD_TO_LINEUP, REMOVE_FROM_LINEUP } from '../../actions/lineup';


describe('reducers', () => {
  describe('Lineup', () => {

    it('should have initial state', () => {
      const initialState = lineups(undefined, {});
      expect(initialState.size).toBe(5);
      const players = initialState.get(1).get('players');
      expect(players.size).toBe(3);
      expect(players.toJS()).toContain(1);
      expect(players.toJS()).toContain(3);
      expect(players.toJS()).toContain(5);
    });

    it('should add player to lineup if did not exist before', () => {
      const state = lineups(undefined, {
        type: ADD_TO_LINEUP,
        lineup: 1,
        player: 4
      });
      const players = state.get(1).get('players');
      expect(players.size).toBe(4);
      expect(players.toJS()).toContain(4);
    });

    it('should not add player if already existed', () => {
      const state = lineups(undefined, {
        type: ADD_TO_LINEUP,
        lineup: 1,
        player: 3
      });
      const players = state.get(1).get('players');
      expect(players.size).toBe(3);
    });

  });
});
