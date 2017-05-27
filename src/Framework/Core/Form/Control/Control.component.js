import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';

// app
import ButtonComponent from './Button/Button.component';
import LinkComponent from './Link/Link.component';

const CONTROL_MAP = {
  button: 'renderButton',
  link: 'renderLink',
};

export default class ControlComponent extends Component {
  static propTypes = {
    label: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired // button or link
  }

  renderControl() {
    const controlType = this.props.type;
    const func = this[CONTROL_MAP[controlType]].bind(this);
    return func();
  }

  renderButton() {
    return (
      <View>
        <ButtonComponent label={this.props.label} />
      </View>
    );
  }

  renderLink() {
    return (
      <View>
        <LinkComponent label={this.props.label} route='http://www.google.com' />
      </View>
    );
  }

  render() {
    return (
      <View>
        {
          this.renderControl()
        }
      </View>
    );
  }
}
