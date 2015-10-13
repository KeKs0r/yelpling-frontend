import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Container from 'react-container';
import * as EventActions from '../../actions/events';
import { eventsWithPlayers } from '../../selectors/playersWithEvents';
import { Card, Avatar } from 'material-ui';
import Timeline from './Timeline';

const eventNames = [
  {name: 'Tor', max: 40, min: 30},
  {name: 'Vorlage', max: 20, min: 15},
  {name: 'Pass', max: 3, min: 1},
  {name: 'Steilpass', max: 5, min: 2},
  {name: 'Zweikamf gewonnen', max: 2, min: 1},
  {name: 'Geklärt', max: 4, min: 3},
  {name: 'Ballverlust', max: -1, min: -5},
  {name: 'Fehlpass', max: -2, min: -4},
  {name: 'Gegentor', max: -5, min: -10},
]

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
          const eventBase = eventNames[Math.floor(Math.random() * eventNames.length)];
          const player = Math.ceil(Math.random() * 16);
          const score = Math.floor(Math.random() * (eventBase.max - eventBase.min)) + eventBase.min;
          gameEvent(player, score, eventBase.name);
          if(i < 10) {
            setTimeout(trigger, 1600);
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
