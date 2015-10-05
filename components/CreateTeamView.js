import React, { Component, PropTypes } from 'react';
import TeamSelection from './TeamSelection';
import PlayerSelection  from './PlayerSelection';


export default class CreateTeamView extends Component {
  render() {
    return (
      <div>
        <div style={{float:'left'}}>
          <TeamSelection lineupId={1}/>
        </div>
        <div style={{float:'left'}}>
          <PlayerSelection lineupId={1} />
        </div>
        <div style={{clear: 'both'}}/>
      </div>
    );
  }
}
