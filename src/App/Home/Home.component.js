import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { IntlProvider, FormattedMessage } from 'react-intl';

// app
import styles from './Home.styles';
import i18n from './Home.i18n';
import { getLocale } from '../../Shared/utils';

const messages = i18n[getLocale()];

export default class HomeComponent extends Component {
  static navigationOptions = {
    drawerLabel: messages.home,
    title: messages.home,
  };

  render() {
    return (
      <IntlProvider messages={messages}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            <FormattedMessage id="welcome" />
          </Text>
        </View>
      </IntlProvider>
    );
  }
}
