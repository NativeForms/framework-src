import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { IntlProvider, FormattedMessage } from 'react-intl';

// app
import styles from './Home.styles';
import i18n from './Home.i18n';
import { getLocale } from '../../Shared/utils';

const messages = i18n[getLocale()];

export default class HomeComponent extends Component {
  static navigationOptions = {
    drawerLabel: messages.title,
    title: messages.title,
  };

  render() {
    return (
      <IntlProvider messages={messages}>
        <View style={styles.container}>
         <Image source={require('./img/front-page-icon.png')} style={{width: 50, height: 60}} />
          <Text style={styles.welcome}>
            <FormattedMessage id="welcome" />
          </Text>
        </View>
      </IntlProvider>
    );
  }
}
