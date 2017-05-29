import React, { Component } from 'react';

import { Form } from '../Core/Form';
import schema from './Login.schema';
import i18n from './Login.i18n';
import { getLocale } from '../../Shared/utils';

const messages = i18n[getLocale()];

export default class LoginContainer extends Component {
  static navigationOptions = {
    drawerLabel: messages.title,
    title: messages.title,
  }

  render() {
    return <Form schema={schema} messages={messages} />;
  }
}
