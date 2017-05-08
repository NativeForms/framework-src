/* eslint global-require: 0 */

import Immutable from 'immutable';
import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer, { rootEpic } from './root';

// framework
import { actionCreators } from './Framework';

let composeEnhancers = compose;
if (__DEV__) {
  /* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
  const installDevTools = require('immutable-devtools');

  installDevTools(Immutable);

  // Use it if Remote debugging with RNDebugger, otherwise use remote-redux-devtools
  /* eslint-disable no-underscore-dangle */
  composeEnhancers = (
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    require('remote-redux-devtools').composeWithDevTools
  )({
    name: Platform.OS,
    ...require('../package.json').remotedev,
    actionCreators,
  });
  /* eslint-enable no-underscore-dangle */
}

const epicMiddleware = createEpicMiddleware(rootEpic);
const enhancer = composeEnhancers(
  applyMiddleware(epicMiddleware),
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('./root').default);
      epicMiddleware.replaceEpic(require('./root').rootEpic);
    });
  }
  return store;
}
