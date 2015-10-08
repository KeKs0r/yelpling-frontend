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

  // it('i can bind', () => {
  //   const mockFunc = (arg, arg2) => {
  //     return {f: arg, f2: arg2};
  //   };
  //   const bound = mockFunc.bind(undefined, 5, 12);
  //   const value = bound(7,9);
  //   expect(value.f).toBe(5);
  //   expect(value.f2).toBe(12);
  //   console.log(bound(12,98123));
  // });

});
