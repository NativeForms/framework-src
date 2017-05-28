import React, { Component } from 'react';

import TextInputComponent from './TextInput.component';

import { IntlProvider } from 'react-intl';
import { getLocale } from '../../../Shared/utils';
import i18n from './TextInput.i18n'

const messages = i18n[getLocale()];

export default class TextInputContainer extends Component {
  static navigationOptions = {
    drawerLabel: messages.title,
    title: messages.title,
  };

  render() {
    return (
      <IntlProvider locale='en' messages={messages}>
        <TextInputComponent {...this.props}/>
      </IntlProvider>
    );
  }
}
