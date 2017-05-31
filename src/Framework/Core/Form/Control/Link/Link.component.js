import React, { Component, PropTypes } from 'react';
import { Text, View, TouchableHighlight, Linking } from 'react-native';
import { FormattedMessage, } from 'react-intl';

export default class LinkComponent extends Component {
  static propTypes = {
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]).isRequired,
    route: PropTypes.string.isRequired,
  }

  linkTo = () => {
    Linking.canOpenURL(this.props.route).then(supported => {
      if (supported) {
        Linking.openURL(this.props.route);
      } else {
        console.log(`Cannot open route:${this.props.route}`); // eslint-disable-line no-console
      }
    });
  }

  render() {
    const { label } = this.props;
    return (
      <TouchableHighlight onPress={this.linkTo}>
        <View>
          {typeof label === 'string' &&
            <Text>label</Text>
          }
          {label && typeof label === 'object' &&
            <FormattedMessage id={label.code} values={label.values} />
          }
        </View>
      </TouchableHighlight>
    );
  }
}
