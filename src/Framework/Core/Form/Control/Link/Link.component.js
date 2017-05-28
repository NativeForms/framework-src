import React, { Component, PropTypes } from 'react';
import { Text, View, TouchableHighlight, Linking } from 'react-native';

export default class LinkComponent extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
  }

  linkTo = () => {
    Linking.canOpenURL(this.props.route).then(supported => {
      if (supported) {
        Linking.openURL(this.props.route);
      } else {
        console.log('Cannot open route: ' + this.props.route);
      }
    });
  }

  render() {
    const { label, route } = this.props;

    return (
      <TouchableHighlight onPress={this.linkTo}>
        <View>
          <Text>{label}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
