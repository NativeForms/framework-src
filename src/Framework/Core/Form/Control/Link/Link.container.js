import React, { Component } from 'react';

<<<<<<< HEAD
import FormComponent from '../../Form.component';
import LinkSchema from './Link.schema';
import i18n from './Link.i18n';

=======
// framework
import { Form } from '../../../Form';
import schema from './Link.schema';
import i18n from './Link.i18n';
>>>>>>> master
import { getLocale } from '../../../../../Shared/utils';

const messages = i18n[getLocale()];

<<<<<<< HEAD
export default class ButtonContainer extends Component {
  static navigationOptions = {
    drawerLabel: messages.title,
    title: messages.title,
  };

  render() {
    return (
      <FormComponent messages={messages} schema={LinkSchema} />
    );
=======
export default class LinkContainer extends Component {
  static navigationOptions = {
    drawerLabel: messages.title,
    title: messages.title,
  }

  render() {
    return <Form schema={schema} messages={messages} />;
>>>>>>> master
  }
}
