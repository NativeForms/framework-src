import React, { Component, PropTypes } from 'react';
import { Text, View, TouchableHighlight, Linking } from 'react-native';
import { FormattedMessage, } from 'react-intl';
import renderIf from 'render-if';

export default class LinkComponent extends Component {
  static propTypes = {
    label: PropTypes.oneOf([PropTypes.string.isRequired, PropTypes.object.isRequired]).isRequired,
    route: PropTypes.string.isRequired,
  }

  linkTo = () => {
    Linking.canOpenURL(this.props.route).then(supported => {
      if (supported) {
        Linking.openURL(this.props.route);
      } else {
        /* eslint no-console:0 */
        console.log(`Cannot open route:${this.props.route}`);
      }
    });
  }

  render() {
    const { label } = this.props;
    return (
      <TouchableHighlight onPress={this.linkTo}>
        <View>
          {renderIf(typeof this.props.label === 'string')(
            <Text>label</Text>
          )}
          {renderIf(typeof this.props.label === 'object')(
            <FormattedMessage id={label.code} values={label.values} />
          )}
        </View>
      </TouchableHighlight>
    );
  }
}
