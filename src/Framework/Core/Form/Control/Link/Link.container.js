import React, { Component } from 'react';

import FormComponent from '../../Form.component';
import LinkSchema from './Link.schema';
import i18n from './Link.i18n';

import { getLocale } from '../../../../../Shared/utils';

const messages = i18n[getLocale()];

export default class ButtonContainer extends Component {
  static navigationOptions = {
    drawerLabel: messages.title,
    title: messages.title,
  };

  render() {
    return (
      <FormComponent messages={messages} schema={LinkSchema} />
    );
  }
}
