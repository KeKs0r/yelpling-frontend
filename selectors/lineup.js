import { createSelector } from 'reselect';
import { Map } from 'immutable';
import { system } from '../reducers/lineups';

const mergeWithPlayers = (players, lineup) => {
    return lineup.get('players')
                        .map((p) => {
                          return players.get(p);
                        });
}

const distribution = (lineupWithPlayers) => {
    return lineupWithPlayers.countBy((p) => p.get('position'));
}

const costs = (lineupWithPlayers) => {
    return lineupWithPlayers.reduce((k, v) => k + v.get('price'), 0);
}

const playersWithStatus = (players, lineup, filter, search) => {
  let result = players.map((p) => {
      return p.set('selected', lineup.get('players').has(p.get('id')));
  });
  if(filter){
    result = result.filter((p) => (p.get('position') === filter));
  }
  if(search) {
    result = result.filter((p) => (p.get('name').toLowerCase().indexOf(search.toLowerCase()) > -1))
  }
  return result;
}

const missing = (lineup) => {
  const g = lineup.groupBy((p) => p.get('position'));
  const goal = (g.get('GOAL')) ? g.get('GOAL').size : 0;
  const def = (g.get('DEF')) ? g.get('DEF').size : 0;
  const mid = (g.get('MID')) ? g.get('MID').size : 0;
  const att = (g.get('ATT')) ? g.get('ATT').size : 0;
  let m = {
    GOAL: system.GOAL - goal,
    DEF: system.DEF - def ,
    MID: system.MID - mid,
    ATT: system.ATT - att,
  }
  m.TOTAL = m.GOAL + m.DEF + m.MID + m.ATT;
  return new Map(m);
}

const players = state => state.players;
const lineup = (state, props) => state.lineups.get(props.lineupId);
const query = state => state.router.location.query;

export const _lineupWithPlayers = createSelector(
  players,
  lineup,
  (players, lineup) => mergeWithPlayers(players, lineup)
);

export const lineupWithPlayers = createSelector(
  _lineupWithPlayers,
  (lwp) => {
    return {
      lineup: lwp,
      costs: costs(lwp)
    };
  }
)

// export const lineupWithMissing = createSelector(
//   _lineupWithPlayers,
//   (l) => {
//     return {
//       lineup: l,
//       missing: missing(l)
//     }
//   }
// );


export const lineupSummary = createSelector(
  _lineupWithPlayers,
  (lineupWithPlayers) => {
    return {
      distribution: distribution(lineupWithPlayers),
      cost: costs(lineupWithPlayers)
    };
  }
);

export const playersWithLineupStatus = createSelector(
  players,
  lineup,
  query,
  _lineupWithPlayers,
  (players, lineup, query, lwp) => {
    return {
      players: playersWithStatus(players, lineup, query.position, query.s),
      missing: missing(lwp),
      costs: costs(lwp)
    };
  }
);
