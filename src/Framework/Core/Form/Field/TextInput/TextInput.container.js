import React, { Component } from 'react';
import { Content, Grid, Row } from 'native-base';

// framework
import { Form } from '../../../Form';
import i18n from './TextInput.i18n';
import { SchemaViewer, getLocale } from '../../../../../Shared/utils';

/* eslint-disable import/no-duplicates, import/extensions */
import schema from './TextInput.schema';
import schemaText from './TextInput.schema.js';
/* eslint-enable import/no-duplicates, import/extensions */

const messages = i18n[getLocale()];

export default class TextInputContainer extends Component {
  static navigationOptions = {
    drawerLabel: messages.title,
    title: messages.title,
  };

  render() {
    return (
      <Content>
        <Grid>
          <Row>
            <Form schema={schema} messages={messages} />
          </Row>
          <Row style={{ paddingTop: 10 }}>
            <SchemaViewer>{schemaText}</SchemaViewer>
          </Row>
        </Grid>
      </Content>
    );
  }
}
