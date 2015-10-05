import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { lineupSummary } from '../selectors/lineup';
import { BUDGET } from '../config';

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
      remainingOut = (<p>$ {remaining} remaining</p>);
      if(openCount > 0){
        const avgRemaining = Math.floor(remaining / openCount);
        subOut = <p>{avgRemaining} per open position({openCount})</p>
      }
    } else {
      remainingOut = (<span>Already {remaining * -1} over budget</span>);
    }
    return (
      <div>
          {remainingOut}
          {subOut}
      </div>
    );
  }
}
