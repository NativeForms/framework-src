import React, { Component } from 'react';

// framework
import { Form } from '../../../Form';
import schema from './TextInput.schema';
import i18n from './TextInput.i18n';
import { getLocale } from '../../../../../Shared/utils';

const messages = i18n[getLocale()];

export default class TextInputContainer extends Component {
  static navigationOptions = {
    drawerLabel: messages.title,
    title: messages.title,
  };

  render() {
    return <Form schema={schema} messages={messages} />;
  }
}
