import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

// config
import configureStore from './configureStore';

// app
import App from './App';

const store = configureStore();

const NativeForms = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('NativeForms', () => NativeForms);
