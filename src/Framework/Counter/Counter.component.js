import React, { Component, PropTypes } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { toJS } from '../../Shared/utils';

// app
import styles from './Counter.styles';

class CounterComponent extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.object.isRequired,
  };

  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Clicked: {counter.counter} times</Text>
          <TouchableHighlight onPress={increment}>
            <Text style={styles.text}>+</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={decrement}>
            <Text style={styles.text}>-</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={incrementIfOdd}>
            <Text style={styles.text}>Increment if odd</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={incrementAsync}>
            <Text style={styles.text}>Increment async</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default toJS(CounterComponent);
