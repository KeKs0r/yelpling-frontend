import React, { Component, PropTypes } from 'react';
import Style from 'animate.css/animate.css';
import { List, Card, Avatar, CardTitle } from 'material-ui';
import Player from './Player';
import { LINEUP } from '../texts';
import { POSITION_ORDER } from '../constants';
import TransitionGroup from 'react-addons-css-transition-group';


export default class PlayerList extends Component {
  static propTypes = {
    players: PropTypes.object.isRequired
  }
  render() {
    const { players } = this.props;
    const total = players.reduce((r, v) => {
        return r + v.get('score');
    },0);
    const listContent = players
      .groupBy((p) => p.get('position'))
      .sortBy((p, pos) => POSITION_ORDER.indexOf(pos))
      .map((players, pos) => {
        const playerList = players.map((p) => (<Player key={p.get('name')} player={p}
            rightAvatar={<Avatar><TransitionGroup transitionName={{
                enter: 'pulse'}}>
                {p.get('score')}</TransitionGroup></Avatar>}
          /> )).valueSeq();
        return (<List subheader={LINEUP['POSITION_'+pos]}>
              {playerList}
        </List>)
      }).valueSeq()
    return (
      <Card>
          <CardTitle title={total + ' Points'} subtitle="Total Score"/>
          {listContent}
      </Card>
    );
  }
}
