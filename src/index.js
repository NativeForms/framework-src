import 'intl';
import React from 'react';
import { AppRegistry, Text } from 'react-native';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';

// config
import configureStore from './configureStore';

// app
import App from './App';
import { getLocale } from './Shared/utils';

const store = configureStore();

const NativeForms = () => (
  <IntlProvider locale={getLocale()} textComponent={Text}>
    <Provider store={store}>
      <App />
    </Provider>
  </IntlProvider>
);

AppRegistry.registerComponent('NativeForms', () => NativeForms);
