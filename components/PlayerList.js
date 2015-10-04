import React, { Component, PropTypes } from 'react';
import Player from './Player';

class PlayerList extends Component {
  static propTypes = {
    players: PropTypes.object.isRequired
  }
  render() {
    const { players } = this.props;
    return (
      <div>
        {players.map(
          (p) => <Player key={p.get('name')} player={p} />
      ).valueSeq()}
      </div>
    );
  }
}

export default PlayerList;
