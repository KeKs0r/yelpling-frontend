import React from 'react';
import ReactDOM  from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Routes from './routes.js'
import Style from 'font-awesome/css/font-awesome.css';

injectTapEventPlugin();
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    {Routes}
  </Provider>,
  document.getElementById('root')
);
