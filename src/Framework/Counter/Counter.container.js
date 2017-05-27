import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

// app
import CounterComponent from './Counter.component';
import * as CounterActions from './Counter.actions';
import i18n from './Counter.i18n';
import { getLocale } from '../../Shared/utils';

const messages = i18n[getLocale()];

@connect(
  state => ({
    counter: state.get('counter')
  }),
  dispatch => bindActionCreators(CounterActions, dispatch)
)
export default class CounterContainer extends Component {
  static navigationOptions = {
    drawerLabel: messages.title,
    title: messages.title,
  };

  render() {
    return (
      <IntlProvider messages={messages}>
        <CounterComponent {...this.props} />
      </IntlProvider>
    );
  }
}
