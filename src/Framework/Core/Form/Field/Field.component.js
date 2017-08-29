import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';

// app
import TextInputComponent from './TextInput/TextInput.component';
import SelectionComponent from './Selection/Selection.component';

export default class FieldComponent extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    attributes: PropTypes.any.isRequired,
  }

  constructor() {
    super();

    this.FIELD_MAP = {
      text: this.renderTextInput.bind(this),
      selection: this.renderSelection.bind(this),
    };
  }

  renderField() {
    const func = this.FIELD_MAP[this.props.type];
    return func();
  }

  renderTextInput() {
    return (
      <View>
        <TextInputComponent {...this.props.attributes} />
      </View>
    );
  }

  renderSelection() {
    return (
      <View>
        <SelectionComponent {...this.props.attributes} />
      </View>
    );
  }

  render() {
    return (
      <View>
        {
          this.renderField()
        }
      </View>
    );
  }
}
