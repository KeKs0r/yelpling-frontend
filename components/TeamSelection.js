import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { replaceState } from 'redux-router';
// import * as LineupActions from '../actions/lineup';
import { lineupWithPlayers } from '../selectors/lineup';

import PositionList from './PositionList';
import LineupBudget from './LineupBudget';
import { system } from '../reducers/lineups';
import { BUDGET } from '../config';
import { Card, CardText, CardActions, RaisedButton } from 'material-ui';
import Container from 'react-container';

@connect(
  (state, props) => {
    const data = lineupWithPlayers(state, props);
    const router = {
      query: state.router.location.query,
      path: state.router.location.pathname
    };
    return Object.assign({}, data, router);
  },
  { replaceState }
  // dispatch => bindActionCreators(EventActions, dispatch)
)
export default class TeamSelection extends Component {
  static propTypes = {
    lineup: PropTypes.object.isRequired,
    costs: PropTypes.number.isRequired,
    path: PropTypes.string.isRequired,
    replaceState: PropTypes.func.isRequired,
  }
  render() {
    const { lineup, costs, replaceState, query } = this.props;
    const grouped = lineup.groupBy((p) => p.get('position'));
    const goal = (grouped.get('GOAL')) ? grouped.get('GOAL').size : 0;
    const def = (grouped.get('DEF')) ? grouped.get('DEF').size : 0;
    const mid = (grouped.get('MID')) ? grouped.get('MID').size : 0;
    const att = (grouped.get('ATT')) ? grouped.get('ATT').size : 0;

    const replace = (query.replace) ? parseInt(query.replace) : null;
    return (
      <Card>
        <LineupBudget openCount={11 - lineup.size} costs={costs} />
        <Container scrollable grow>
          <PositionList players={grouped.get('GOAL')} position="GOAL" count={system.GOAL} selectPosition={this.selectPosition} selectPlayer={this.selectPlayer}
            selectedPosition={query.position}
            selectedPlayer={replace}
            />
          <PositionList players={grouped.get('DEF')} position="DEF" count={system.DEF} selectPosition={this.selectPosition} selectPlayer={this.selectPlayer}
            selectedPosition={query.position}
            selectedPlayer={replace}
            />
          <PositionList players={grouped.get('MID')} position="MID" count={system.MID} selectPosition={this.selectPosition} selectPlayer={this.selectPlayer}
            selectedPosition={query.position}
            selectedPlayer={replace}
            />
          <PositionList players={grouped.get('ATT')} position="ATT" count={system.ATT} selectPosition={this.selectPosition} selectPlayer={this.selectPlayer}
            selectedPosition={query.position}
            selectedPlayer={replace}
            />
          <CardActions>
            <RaisedButton disabled={lineup.size < 11 || costs > BUDGET} label="Aufstellung speichern" />
          </CardActions>
        </Container>
      </Card>
    );
  }
  selectPosition = (position) => {
    this.props.replaceState(null,this.props.path, {position: position});
  }
  selectPlayer = (playerId, playerPosition) => {
    this.props.replaceState(null,this.props.path, {replace: playerId, position: playerPosition});
  }
}
