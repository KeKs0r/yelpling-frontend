import React, { Component, PropTypes } from 'react';
import PlayerEvents from './PlayerEvents';


class Player extends Component {
  static propTypes = {
    player: PropTypes.object.isRequired
  }
  render() {
    const player = this.props.player.toJS();
    return (
      <div>
        <li>{player.name} - {player.score}</li>
        <PlayerEvents events={player.events} />
    </div>
    );
  }
}

export default Player;
