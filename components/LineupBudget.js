import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { lineupSummary } from '../selectors/lineup';
import { BUDGET } from '../config';
import { CardTitle } from 'material-ui';

export default class LineupBudget extends Component {
  static propTypes = {
    openCount: PropTypes.number.isRequired,
    costs: PropTypes.number.isRequired
  }
  render() {
    const { openCount, costs } = this.props;
    const remaining = BUDGET - costs;

    let remainingOut, subOut;
    if(remaining > 0){
      remainingOut = '$ ' +remaining+' remaining';
      if(openCount > 0){
        const avgRemaining = Math.floor(remaining / openCount);
        subOut = '$ '+avgRemaining +' per open position ('+openCount+')';
      }
    } else {
      remainingOut = 'Already '+ (remaining * -1) + ' over budget'
    }
    return (
      <CardTitle title={remainingOut} subtitle={subOut} />
    );
  }
}
