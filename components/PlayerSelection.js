import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LineupActions from '../actions/lineup';
import { playersWithLineupStatus} from '../selectors/lineup';
import SearchField from './SearchField';

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
        action = (<span onClick={remove}>x</span>);
      } else if(missing.get(p.get('position'))){
        action =(<span onClick={add}>+</span>);
      }
      return (<li key={p.get('id')}>{p.get('name')} ${p.get('price')} {action}</li>);
    }).valueSeq();
    return (
      <div>
        <SearchField />
        {playersOut}
      </div>
    );
  }
}
