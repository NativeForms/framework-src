import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';

// app
import ControlComponent from './Control/Control.component';
import FieldComponent from './Field/Field.component';

const FORM_MAP = {
  control: 'renderControl',
  field: 'renderField',
};

export default class FormComponent extends Component {
  static propTypes = {
    schema: React.PropTypes.any.isRequired
  }

  renderForm() { // TODO: iterate through all formcomponents
    const formComponents = this.props.schema.attributes.formComponents;
    const category = formComponents[0].category;
    const func = this[FORM_MAP[category]].bind(this);
    return func(formComponents[0]);
  }

  renderControl(component) {
    const controlLabel = component.attributes.label;
    const controlType = component.type;
    return (
      <ControlComponent label={controlLabel} type={controlType} />
    );
  }

  renderField(component) {
    const fieldLabel = component.attributes.label;
    const fieldType = component.type;
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
