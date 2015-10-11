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
      let i = 0;
      const trigger = () => {
        const player = Math.ceil(Math.random() * 16);
        const score = Math.floor(Math.random() * 20) - 4;
        gameEvent(player, score);
        if(i < 100) {
          setTimeout(trigger,100);
        }
        i++;
      }
      trigger();
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
