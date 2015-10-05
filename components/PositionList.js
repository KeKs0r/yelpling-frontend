import React, { Component, PropTypes } from 'react';
import Player from './Player';
import { Map } from 'immutable';

class PlayerList extends Component {
  static propTypes = {
    players: PropTypes.object,
    position: PropTypes.string.isRequired,
    count: PropTypes.number
  }
  static defaultProps = {
    players: new Map(),
    count: 1
  }
  render() {
    const { players, position, count } = this.props;
    const fillNumber = count - players.size;

    const playersOut = players.map(
        (p) => (<li key={'player_'+p.get('id')}>{p.get('name')}</li>)
      ).valueSeq();
    const fillOut = [];
    for (let i = 0; i < fillNumber; i++) {
      fillOut.push(<li key={i}> Select player</li>)
    }
    return (
      <div>
        {playersOut}
        {fillOut}
      </div>
    );
  }
}

export default PlayerList;
