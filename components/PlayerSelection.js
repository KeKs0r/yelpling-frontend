import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LineupActions from '../actions/lineup';
import { playersWithLineupStatus} from '../selectors/lineup';
import SearchField from './SearchField';
import Player from './Player';
import Container from 'react-container';
import { FontIcon, IconButton, Styles, List, Paper, Card, CardText, ListDivider } from 'material-ui';
const Colors = Styles.Colors;

@connect(
  playersWithLineupStatus,
  dispatch => bindActionCreators(LineupActions, dispatch)
)
export default class PlayerSelection extends Component {
  static propTypes = {
    players: PropTypes.object.isRequired
  }
  render() {
    const { players, addToLineup, removeFromLineup, missing, costs } = this.props;
    const playersOut = [];
    players.map((p, k, i) => {
      let action;
      const add = () => addToLineup(p.get('id'));
      const remove = () => removeFromLineup(p.get('id'));

      if(p.get('selected')){
        action = (<IconButton onClick={remove}><FontIcon className="fa fa-times-circle" color={Colors.red300}  /></IconButton>);
      } else if(missing.get(p.get('position'))){
        action =(<IconButton onClick={add}><FontIcon className="fa fa-plus-circle" color={Colors.green500} /></IconButton>);
      }
      playersOut.push(<Player key={p.get('id')} player={p} rightIconButton={action} />);
      if(i.last() !== p){
        playersOut.push(<ListDivider key={'div_'+p.get('id')}/>);
      }
    });
    return (
        <Card>
          <CardText><SearchField style={{width:'80%'}}/></CardText>
            <Container scrollable grow>
              <List>
                {playersOut}
              </List>
            </Container>
        </Card>
    );
  }
}
