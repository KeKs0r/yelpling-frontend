import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as EventActions from '../actions/events';
import { playersWithEventsSelector } from '../selectors/playersWithEvents';
import PlayerList from './PlayerList';
import LineupSummary from './LineupSummary';
import Container from 'react-container';


@connect(
  playersWithEventsSelector,
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
      <Container style={{width:'82%'}}>
        <h2>Aufstellung oha</h2>
        <LineupSummary lineupId={1} />
        <button onClick={triggerGameEvent}> GameEvent</button>
        <PlayerList players={players} />
      </Container>
    );
  }
}

export default Lineup;
