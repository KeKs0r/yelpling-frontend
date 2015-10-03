import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as EventActions from '../actions/events';
import { playersWithEvents } from '../selectors/playersWithEvents';
import PlayerList from './PlayerList';


@connect(
  playersWithEvents,
  dispatch => bindActionCreators(EventActions, dispatch)
)
class Lineup extends Component {
  static propTypes = {
    players: PropTypes.object.isRequired,
    gameEvent: PropTypes.func.isRequired
  }
  render() {
    const { players, gameEvent } = this.props;
    const triggerGameEvent = () => {
      const player = Math.ceil(Math.random() * 5);
      const score = Math.floor(Math.random() * 6) - 2;
      gameEvent(player, score);
    }
    return (
      <div>
        <h2>Aufstellung oha</h2>
        <button onClick={triggerGameEvent}> GameEvent</button>
        <PlayerList players={players} />
      </div>
    );
  }
}

export default Lineup;
