import React, { Component } from 'react';
// framework
import { Form } from '../../../Form';
import schema from './Link.schema';
import i18n from './Link.i18n';
import { getLocale } from '../../../../../Shared/utils';

const messages = i18n[getLocale()];

export default class LinkContainer extends Component {
  static navigationOptions = {
    drawerLabel: messages.title,
    title: messages.title,
  }

  render() {
    return <Form schema={schema} messages={messages} />;
  }
}
