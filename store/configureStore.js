import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createHashHistory';
import reducer from '../reducers';
let middleware = [thunk];

if (process.env.NODE_ENV !== 'test' && process.env.NODE_ENV !=='production') {
  const createLogger = require('redux-logger');
  const logger = createLogger();
  middleware = [...middleware, logger];
}

const createStoreWithMiddleware = compose(
  applyMiddleware(...middleware),
  reduxReactRouter({
    // routes,
    createHistory
})
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
