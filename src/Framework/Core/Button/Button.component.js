import React, { Component, PropTypes } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { toJS } from '../../Shared/utils';

class ButtonComponent extends Component {
  static propTypes = {
    content: React.PropTypes.string.isRequired,
  }

  render() {
    const { content } = this.props;

    return (
      <TouchableHighlight onPress={() => { console.log('Button pressed!'); }}>
        <View>
          <Text>{content}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default ButtonComponent;
