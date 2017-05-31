import React, { Component } from 'react';
import { Content, Grid, Row } from 'native-base';
import SyntaxHiglighter from 'react-native-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/styles';

// framework
import { Form } from '../../../Form';
import i18n from './Link.i18n';
import { getLocale } from '../../../../../Shared/utils';

/* eslint-disable import/no-duplicates, import/extensions */
import schema from './Link.schema';
import schemaText from './Link.schema.js';
/* eslint-enable import/no-duplicates, import/extensions */

const messages = i18n[getLocale()];

export default class LinkContainer extends Component {
  static navigationOptions = {
    drawerLabel: messages.title,
    title: messages.title,
  }

  render() {
    return (
      <Content>
        <Grid>
          <Row style={{ padding: 10 }}>
            <Form schema={schema} messages={messages} />
          </Row>
          <Row style>
            <SyntaxHiglighter language="javascript" style={github}>
              {schemaText}
            </SyntaxHiglighter>
          </Row>
        </Grid>
      </Content>
    );
  }
}
