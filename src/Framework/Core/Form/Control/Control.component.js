import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';

// app
import ButtonComponent from './Button/Button.component';
import LinkComponent from './Link/Link.component';

export default class ControlComponent extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    attributes: PropTypes.any.isRequired,
  }

  constructor() {
    super();

    this.CONTROL_MAP = {
      button: this.renderButton.bind(this),
      link: this.renderLink.bind(this),
    };
  }

  renderControl() {
    const func = this.CONTROL_MAP[this.props.type];
    return func();
  }

  renderButton() {
    return (
      <View>
        <ButtonComponent {...this.props.attributes} />
      </View>
    );
  }

  renderLink() {
    return (
      <View>
        <LinkComponent {...this.props.attributes} />
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
