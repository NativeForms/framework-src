import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { Content, Grid, Row } from 'native-base';
import { IntlProvider, FormattedMessage } from 'react-intl';

// app
import styles from './Home.styles';
import i18n from './Home.i18n';
import { getLocale } from '../../Shared/utils';

const messages = i18n[getLocale()];
const image = require('./logo.png');

export default class HomeComponent extends Component {
  static navigationOptions = {
    drawerLabel: messages.title,
    title: messages.title,
  };

  render() {
    return (
      <IntlProvider messages={messages}>
        <Content>
          <Grid style={styles.container}>
            <Row>
              <Image source={image} />
            </Row>
            <Row>
              <Text style={styles.welcome}>
                <FormattedMessage id="welcome" />
              </Text>
            </Row>
            <Row />
          </Grid>
        </Content>
      </IntlProvider>
    );
  }
}
