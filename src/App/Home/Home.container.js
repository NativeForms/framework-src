import React, { Component } from 'react';

// app
import HomeComponent from './Home.component';

export default class HomeContainer extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    title: 'Home',
  };

  render() {
    return <HomeComponent />;
  }
}
