import React, { Component, PropTypes } from 'react';
import { Text, View, TouchableHighlight, Linking } from 'react-native';

class LinkComponent extends Component {
  static propTypes = {
    url: React.PropTypes.string,
  }

  handleURLClick = () => {
    Linking.canOpenURL(this.props.url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.url);
      } else {
        console.log('Cannot open URI: ' + this.props.url);
      }
    });
  }

  render() {
    const { url } = this.props;

    return (
      <TouchableHighlight onPress={this.handleURLClick}>
        <View>
          <Text>{url}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default LinkComponent;
