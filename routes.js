import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { ReduxRouter } from 'redux-router';

import Counter from './components/Counter';
import Lineup from './components/Lineup';
import CreateTeamView from './components/CreateTeamView';
import App from './components/App';


const routes = (
  <ReduxRouter>
    <Route path='/' component={App}>
      <IndexRoute component={Counter} />
      <Route path='lineup' component={Lineup} />
      <Route path='team' component={CreateTeamView} />
    </Route>
  </ReduxRouter>
);

export default routes;
