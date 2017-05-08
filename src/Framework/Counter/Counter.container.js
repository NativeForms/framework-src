import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// app
import CounterComponent from './Counter.component';
import * as CounterActions from './Counter.actions';

@connect(
  state => ({
    counter: state.counter
  }),
  dispatch => bindActionCreators(CounterActions, dispatch)
)
export default class CounterContainer extends Component {
  static navigationOptions = {
    drawerLabel: 'Counter',
    title: 'Counter',
  };

  render() {
    return <CounterComponent {...this.props} handleBack={this.handleBack} />;
  }
}
