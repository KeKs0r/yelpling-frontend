import { createSelector } from 'reselect';
import { Map } from 'immutable';


function mergeWithPlayers(players, lineup) {
    return lineup.get('players')
                        .map((p) => {
                          return players.get(p);
                        });
}

function distribution(lineupWithPlayers) {
    return lineupWithPlayers.countBy((p) => p.get('position'));
}

function costs(lineupWithPlayers) {
    return lineupWithPlayers.reduce((k, v) => k + v.get('price'), 0);
}



const players = state => state.players;
const lineup = (state, props) => state.lineups.get(props.lineupId);

export const lineupWithPlayers = createSelector(
  players,
  lineup,
  (players, lineup) => mergeWithPlayers(players, lineup)
);

export const lineupSummary = createSelector(
  lineupWithPlayers,
  (lineupWithPlayers) => {
    return {
      distribution: distribution(lineupWithPlayers),
      cost: costs(lineupWithPlayers)
    };
  }
);
