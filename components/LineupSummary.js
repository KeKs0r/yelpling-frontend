import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { lineupSummary } from '../selectors/lineup';


@connect(
  lineupSummary
)
class LineupSummary extends Component {
  static propTypes = {
    lineupId: PropTypes.number.isRequired,
    distribution: PropTypes.object.isRequired,
    cost: PropTypes.number.isRequired
  }
  render() {
    const { distribution, cost } = this.props;
    return (
      <div>
        <h3>Gesamt: {cost}</h3>
        {distribution.map((count, pos) => {
            return <div key={pos}>{pos}: {count}</div>
        }).valueSeq()}
      </div>
    );
  }
}

export default LineupSummary;
