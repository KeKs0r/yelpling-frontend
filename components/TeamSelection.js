import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as LineupActions from '../actions/lineup';
import { lineupWithPlayers }from '../selectors/lineup';
import PositionList from './PositionList';
import { system } from '../reducers/lineups';

@connect(
  lineupWithPlayers,
  // dispatch => bindActionCreators(EventActions, dispatch)
)
export default class TeamSelection extends Component {
  static propTypes = {
    lineup: PropTypes.object.isRequired
  }
  render() {
    const { lineup} = this.props;
    const grouped = lineup.groupBy((p) => p.get('position'));
    const goal = (grouped.get('GOAL')) ? grouped.get('GOAL').size : 0;
    const def = (grouped.get('DEF')) ? grouped.get('DEF').size : 0;
    const mid = (grouped.get('MID')) ? grouped.get('MID').size : 0;
    const att = (grouped.get('ATT')) ? grouped.get('ATT').size : 0;
    return (
      <div>
        <h3>Team</h3>
        <h4>Tor ({goal} / {system.GOAL})</h4>
        <PositionList players={grouped.get('GOAL')} position="GOAL" count={1} />
        <h4>Verteidigung ({def} / {system.DEF})</h4>
        <PositionList players={grouped.get('DEF')} position="DEF" count={4} />
        <h4>Mittelfeld ({mid} / {system.MID})</h4>
        <PositionList players={grouped.get('MID')} position="MID" count={4} />
        <h4>Sturm ({att} / {system.ATT})</h4>
        <PositionList players={grouped.get('ATT')} position="ATT" count={2} />
      </div>
    );
  }
}
