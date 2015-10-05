import React, { Component, PropTypes } from 'react';
import Player from './Player';
import { Map } from 'immutable';
import { Link } from 'react-router'
import { List, ListDivider, ListItem } from 'material-ui';
import { GOAL, DEF, MID, ATT} from '../constants';

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
  getPositionHeadline() {
    console.log(this.props.position);
    console.log(GOAL);
    switch(this.props.position) {
      case GOAL:
        return 'Torwart';
      case DEF:
        return 'Verteidigung';
      case MID:
        return 'Mittelfeld';
      case ATT:
        return 'Sturm';
    }
  }
  render() {
    const { players, position, count } = this.props;
    const fillNumber = count - players.size;

    const playersOut = players.map(
        (p) => (<ListItem key={'player_'+p.get('id')} primaryText={p.get('name')} />)
      ).valueSeq();
    const fillOut = [];
    for (let i = 0; i < fillNumber; i++) {
      const link = <Link component="span" to="/team" query={{position:position}} >Select</Link>
      fillOut.push(<ListItem primaryText={link} key={i} />)
    }
    let headline = this.getPositionHeadline();
    if(count > players.size){
      headline = headline + ' ('+players.size+'/'+count+')';
    }
    return (
      <List subheader={headline}>
        {playersOut}
        {fillOut}
      </List>
    );
  }
}

export default PlayerList;
