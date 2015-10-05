import React, { Component, PropTypes } from 'react';
import PlayerEvents from './PlayerEvents';
import { ListItem, Avatar } from 'material-ui';
import blacklist from 'blacklist';


export default class Player extends Component {
  static propTypes = {
    player: PropTypes.object.isRequired
  }
  render() {
    const player = this.props.player.toJS();
    let propTypes = Object.keys(Player.propTypes);
    const curated = blacklist(this.props, ...propTypes);
    return (
        <ListItem
        leftAvatar={<Avatar src={player.image} />}
        primaryText={player.name}
        secondaryText={'$' + player.price}
        {...curated}
        />
    )
  }
}
