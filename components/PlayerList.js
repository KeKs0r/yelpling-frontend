import React, { Component, PropTypes } from 'react';
import { List, Card, Avatar } from 'material-ui';
import Player from './Player';
import { LINEUP } from '../texts';

class PlayerList extends Component {
  static propTypes = {
    players: PropTypes.object.isRequired
  }
  render() {
    const { players } = this.props;
    const listContent = players
      .groupBy((p) => p.get('position'))
      .map((players, pos) => {
        const playerList = players.map((p) => (<Player key={p.get('name')} player={p}
            rightAvatar={<Avatar>{p.get('score')}</Avatar>}
          /> )).valueSeq();
        return (<List subheader={LINEUP['POSITION_'+pos]}>
              {playerList}
        </List>)
      }).valueSeq()
    return (
      <Card>
          {listContent}
    </Card>
    );
  }
}

export default PlayerList;
