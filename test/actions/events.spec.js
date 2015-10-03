import expect from 'expect';
import * as actions from '../../actions/events';

describe('actions', () => {
  describe('events', () => {

  });

  it('gameEvent has default stuff', () => {
    expect(actions.gameEvent()).toEqual({
      type: actions.GAME_EVENT,
      event: {
        player: 1,
        score: 3,
        name: 'Tor'
      }
    });
  });

});
