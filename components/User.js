import React, { Component, PropTypes } from 'react';
import PlayerEvents from './PlayerEvents';
import { ListItem, Avatar, CardHeader, FontIcon, Styles } from 'material-ui';
import blacklist from 'blacklist';


export default class User extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }
  render() {
    const user = this.props.user.toJS();
    let propTypes = Object.keys(User.propTypes);
    const curated = blacklist(this.props, ...propTypes);
    return (
        <ListItem
        leftAvatar={<Avatar src={user.image} />}
        primaryText={user.username}
        secondaryText={user.name}
        {...curated}
        />
    )
  }
}
