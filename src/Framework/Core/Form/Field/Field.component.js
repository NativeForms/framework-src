import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';

// app
import TextInputComponent from '../../TextInput/TextInput.component'; // TODO move TextInput to Core/Form/Field

export default class ControlComponent extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    attributes: PropTypes.any.isRequired,
  }

  constructor() {
    super();

    this.CONTROL_MAP = {
      text: this.renderTextInput.bind(this),
    };
  }

  renderControl() {
    const func = this.CONTROL_MAP[this.props.type];
    return func();
  }

  renderTextInput() {
    return (
      <View>
        <TextInputComponent {...this.props.attributes} />
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
