import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';

import FormComponent from '../../Form.component';
import ButtonSchema from './Button.schema';
import i18n from './Button.i18n';

import { getLocale } from '../../../../../Shared/utils';

const messages = i18n[getLocale()];

export default class ButtonContainer extends Component {
  static navigationOptions = {
    drawerLabel: messages.title,
    title: messages.title,
  };

  render() {
    return (
      <FormComponent messages={messages} schema={ButtonSchema} />
    );
  }
}
