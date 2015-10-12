import React from 'react';
import { Route, Redirect, IndexRoute} from 'react-router';
import { ReduxRouter } from 'redux-router';

import App from './components/App';
import Home from './components/HomeView';
import HomeSoon from './components/HomeSoonView';
import HomeCurrent from './components/HomeCurrentView';
import HomePast from './components/HomePastView';
import Lineup from './components/Lineup';
import Table from './components/TableView';
import Timeline from './components/timeline/TimelineView';
import CreateTeamView from './components/CreateTeamView';



const routes = (
  <ReduxRouter>
    <Redirect from="/" to="/home/soon" />
    <Route path='/' component={App}>
      <Route path='home' component={Home}>
        <Route path='soon' component={HomeSoon} />
        <Route path='current' component={HomeCurrent} />
        <Route path='past' component={HomePast} />
      </Route>
      <Route path='lineup' component={Lineup} />
      <Route path='team' component={CreateTeamView} />
      <Route path='table' component={Table} />
      <Route path='timeline' component={Timeline} />
    </Route>
  </ReduxRouter>
);

export default routes;
