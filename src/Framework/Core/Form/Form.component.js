import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';

// app
import ControlComponent from './Control/Control.component';
import FieldComponent from './Field/Field.component';

export default class FormComponent extends Component {
  static propTypes = {
    schema: PropTypes.any.isRequired,
  }

  constructor() {
    super();

    this.FORM_MAP = {
      control: this.renderControl.bind(this),
      field: this.renderField.bind(this),
    };
  }

  renderForm() { // TODO: iterate through all formcomponents
    const category = this.props.schema.attributes.formComponents[0].category;
    const func = this.FORM_MAP[category];
    return func();
  }

  renderControl() {
    const control = this.props.schema.attributes.formComponents[0];
    const props = {
      type: control.type,
      attributes: control.attributes,
    };
    return (
      <ControlComponent {...props} />
    );
  }

  renderField() {
    const field = this.props.schema.attributes.formComponents[0];
    const props = {
      type: field.type,
      attributes: field.attributes,
    };
    return (
      <Text>Some field component</Text> // TODO: update after complete Field Component
    );
  }

  render() {
    return (
      <View>
        {
          this.renderForm()
        }
      </View>
    );
  }
}
