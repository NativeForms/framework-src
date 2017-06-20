import React, { Component, PropTypes } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { FormattedMessage, intlShape } from 'react-intl';

// app
import styles from './Counter.styles';
import { toJS, injectIntl } from '../../Shared/utils';

@toJS()
@injectIntl()
/** A Counter with increment and decrement buttons */
class CounterComponent extends Component {
  /**
   * @namespace
   * @property {function} increment - Increment action
   * @property {function} incrementIfOdd - Increment If Odd action
   * @property {function} incrementAsync - Increment Async action
   * @property {function} decrement - Decrement action
   * @property {Object} counter - Counter state
   * @property {Object} intl - React Intl API object
   */
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.object.isRequired,
    intl: intlShape.isRequired
  };

  /**
   * render
   * @return {ViewComponent} - View that represents the Counter
   */
  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter, intl } = this.props;
    const incrementAsyncMsg = intl.formatMessage({ id: 'incrementLabel' }, { type: 'async' }); // example of using formatMessage API
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          <FormattedMessage id="clickedMessage" values={{ count: counter.counter }} />
        </Text>
        <TouchableHighlight onPress={increment}>
          <Text style={styles.text}>+</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={decrement}>
          <Text style={styles.text}>-</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={incrementIfOdd}>
          <Text style={styles.text}><FormattedMessage id="incrementLabel" values={{ type: 'odd' }} /></Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={incrementAsync}>
          <Text style={styles.text}>{incrementAsyncMsg}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default CounterComponent;
