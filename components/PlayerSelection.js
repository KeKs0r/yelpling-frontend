import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LineupActions from '../actions/lineup';
import { playersWithLineupStatus} from '../selectors/lineup';
import SearchField from './SearchField';
import Player from './Player';
import { FontIcon, Styles } from 'material-ui';
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
    const playersOut = players.map((p) => {
      let action;
      const add = () => addToLineup(p.get('id'));
      const remove = () => removeFromLineup(p.get('id'));
      if(p.get('selected')){
        action = (<FontIcon onClick={remove} className="fa fa-fw fa-remove" color={Colors.red300} />);
      } else if(missing.get(p.get('position'))){
        action =(<FontIcon onClick={add} color={Colors.green500} className="fa fa-fw fa-plus-circle" />);
      }
      return (<Player key={p.get('id')} player={p} rightIconButton={action} />);
    }).valueSeq();
    return (
      <div>
        <SearchField />
        {playersOut}
      </div>
    );
  }
}
