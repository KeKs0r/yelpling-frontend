import React, { Component, PropTypes } from 'react';
import { List } from 'material-ui';
import Player from './Player';

class PlayerList extends Component {
  static propTypes = {
    players: PropTypes.object.isRequired
  }
  render() {
    const { players } = this.props;
    return (
      <List>
        {players.map(
          (p) => <Player key={p.get('name')} player={p} />
      ).valueSeq()}
    </List>
    );
  }
}

export default PlayerList;
