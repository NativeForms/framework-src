import React, { Component } from 'react';
import { View, Text } from 'react-native';

// app
import styles from './Home.styles';

export default class HomeComponent extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Boilerplate!
        </Text>
      </View>
    );
  }
}
