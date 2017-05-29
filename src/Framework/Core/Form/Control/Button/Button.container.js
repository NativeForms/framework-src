import React, { Component } from 'react';

<<<<<<< HEAD
import FormComponent from '../../Form.component';
import ButtonSchema from './Button.schema';
import i18n from './Button.i18n';

=======
// framework
import { Form } from '../../../Form';
import schema from './Button.schema';
import i18n from './Button.i18n';
>>>>>>> master
import { getLocale } from '../../../../../Shared/utils';

const messages = i18n[getLocale()];

export default class ButtonContainer extends Component {
  static navigationOptions = {
    drawerLabel: messages.title,
    title: messages.title,
<<<<<<< HEAD
  };

  render() {
    return (
      <FormComponent messages={messages} schema={ButtonSchema} />
    );
=======
  }

  render() {
    return <Form schema={schema} messages={messages} />;
>>>>>>> master
  }
}
