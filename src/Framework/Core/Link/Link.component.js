import React, { Component, PropTypes } from 'react';
import { Text, View, TouchableHighlight, Linking } from 'react-native';

class LinkComponent extends Component {
  static propTypes = {
    label: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
  }

  linkTo = () => {
    Linking.canOpenURL(this.props.url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.url);
      } else {
        console.log('Cannot open URL: ' + this.props.url);
      }
    });
  }

  render() {
    const { label, url } = this.props;

    return (
      <TouchableHighlight onPress={this.linkTo}>
        <View>
          <Text>{label}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default LinkComponent;
