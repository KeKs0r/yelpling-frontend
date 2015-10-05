import React, { Component, PropTypes } from 'react';
import Player from './Player';
import { Map } from 'immutable';
import { Link } from 'react-router'
import { List, ListDivider, ListItem, Avatar } from 'material-ui';
import { GOAL, DEF, MID, ATT} from '../constants';

export default class PlayerList extends Component {
  static propTypes = {
    players: PropTypes.object,
    position: PropTypes.string.isRequired,
    count: PropTypes.number,
    selectPosition: PropTypes.func.isRequired,
    selectPlayer: PropTypes.func.isRequired
  }
  static defaultProps = {
    players: new Map(),
    count: 1
  }
  getPositionHeadline() {
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
    const { players, position, count, selectPlayer} = this.props;
    const fillNumber = count - players.size;

    const playersOut = players.map(
        (p) => (<ListItem key={'player_'+p.get('id')}
          primaryText={p.get('name')}
          leftAvatar={<Avatar src={p.get('image')} />}
          onClick={() => { selectPlayer(p.get('id')) } }
          />)
      ).valueSeq();
    const fillOut = [];
    for (let i = 0; i < fillNumber; i++) {
      fillOut.push(<ListItem key={i}
        primaryText={"Select"}
        onClick={this.selectPosition}
        />)
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
  selectPosition = () => {
    this.props.selectPosition(this.props.position);
  }
}
