import React from 'react';
import { Route, Router, Redirect, IndexRoute} from 'react-router';
import { createHashHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'

import App from './components/App';
import Home from './components/HomeView';
// import HomeRecommend from './components/HomeRecommend';
// import HomeAround from './components/HomeAround';



export default function Routes(store){
  const history = createHashHistory();
  syncReduxAndRouter(history, store);
  return (
    <Router history={history}>
      <Redirect from="/" to="/home" />
      <Route path='/' component={App}>
        <Route path='home' component={Home}>
        </Route>
      </Route>
    </Router>
  );
}
