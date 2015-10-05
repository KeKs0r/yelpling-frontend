import React, { Component, PropTypes } from 'react';
import TeamSelection from './TeamSelection';
import PlayerSelection  from './PlayerSelection';


export default class CreateTeamView extends Component {
  render() {
    return (
      <div>
        <div style={{float:'left', width:'40%', paddingRight:'2%'}}>
          <TeamSelection lineupId={1}/>
        </div>
        <div style={{float:'left', width: '40%'}}>
          <PlayerSelection lineupId={1} />
        </div>
      </div>
    );
  }
}
