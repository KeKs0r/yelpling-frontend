import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Container from 'react-container';
import * as EventActions from '../../actions/events';
import { eventsWithPlayers } from '../../selectors/playersWithEvents';
import { Card, Avatar } from 'material-ui';
import Timeline from './Timeline';

@connect(
  eventsWithPlayers,
  dispatch => bindActionCreators(EventActions, dispatch)
)
export default class TimelineView extends Component {
  static propTypes = {
    events: PropTypes.object.isRequired,
    gameEvent: PropTypes.func.isRequired
  }
  render() {
      const { events, gameEvent } = this.props;
      const triggerGameEvent = () => {
        let i = 0;
        const trigger = () => {
          const player = Math.ceil(Math.random() * 16);
          const score = Math.floor(Math.random() * 20) - 4;
          gameEvent(player, score);
          if(i < 10) {
            setTimeout(trigger, 1100);
          }
          i++;
        }
        trigger();
      }
    return (
      <Container style={{width:'82%', height:'900px'}}>
        <button onClick={triggerGameEvent}>Simulate </button>
        <Timeline events={events} />
      </Container>
    );
  }
}
