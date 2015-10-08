
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LineupActions from '../actions/lineup';
import { playerSelection } from '../selectors/lineup';
import SearchField from './SearchField';
import Player from './Player';
import Container from 'react-container';
import { FontIcon, IconButton, Styles, List, Paper, Card, CardText, ListDivider } from 'material-ui';
const Colors = Styles.Colors;

@connect(
  playerSelection,
  dispatch => bindActionCreators(LineupActions, dispatch)
)
export default class PlayerSelection extends Component {
  static propTypes = {
    lineupId: PropTypes.number.isRequired,
    players: PropTypes.object.isRequired,
    missing: PropTypes.object.isRequired,
    costs: PropTypes.number.isRequired,
    replacePlayer: PropTypes.object,
    addToLineup: PropTypes.func.isRequired,
    removeFromLineup: PropTypes.func.isRequired,
    replaceInLineup: PropTypes.func.isRequired
  }

  getPlayerButton(p){
    const { addToLineup, removeFromLineup, replaceInLineup, replacePlayer, missing, lineupId } = this.props;
    const add = addToLineup.bind(this, p.get('id'), lineupId);
    if(p.get('selected')){
      return (<IconButton onClick={removeFromLineup.bind(this, p.get('id'), lineupId)}><FontIcon className="fa fa-times-circle" color={Colors.red300}  /></IconButton>);
    } else if (replacePlayer) {
      return (<div>
        <IconButton onClick={replaceInLineup.bind(this, replacePlayer.get('id'), p.get('id'), lineupId)}><FontIcon className="fa fa-exchange" color={Colors.blue500} /></IconButton>
        <IconButton onClick={add}><FontIcon className="fa fa-plus-circle" color={Colors.green500} /></IconButton>
      </div>);
    } else if(missing.get(p.get('position'))){
      return (<IconButton onClick={add}><FontIcon className="fa fa-plus-circle" color={Colors.green500} /></IconButton>);
    }
  }
  render() {
    const { players, costs, replacePlayer } = this.props;
    const playersOut = [];
    let replace, headline;
    players.map((p, k, i) => {
      playersOut.push(<Player key={p.get('id')} player={p} rightIconButton={this.getPlayerButton(p)} compare={replacePlayer}/>);
      if(i.last() !== p){
        playersOut.push(<ListDivider key={'div_'+p.get('id')}/>);
      }
    });
    if(replacePlayer){
      headline = 'Ersetzen mit';
      replace = (
        <List subheader="Alternative für:">
          <Player player={replacePlayer} rightIconButton={this.getPlayerButton(replacePlayer)} />
        </List>
      )
    }
    return (
        <Card>
          <CardText><SearchField style={{width:'80%'}}/></CardText>
            <Container scrollable grow>
              {replace}
              <List subheader={headline}>
                {playersOut}
              </List>
            </Container>
        </Card>
    );
  }
}
