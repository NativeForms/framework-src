import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { Container, Form } from 'native-base';
import { IntlProvider } from 'react-intl';

// app
import ControlComponent from './Control/Control.component';
import FieldComponent from './Field/Field.component';

/* eslint class-methods-use-this:0 */
export default class FormComponent extends Component {
  static propTypes = {
    schema: PropTypes.any.isRequired,
    messages: PropTypes.object,
  }

  static defaultProps = {
    messages: {}
  }

  constructor() {
    super();

    this.FORM_MAP = {
      control: this.renderControl,
      field: this.renderField,
    };
  }

  renderForm() {
    return this.props.schema.attributes.formComponents.map(
      formComponent => this.FORM_MAP[formComponent.category](formComponent));
  }

  renderControl(control) {
    const props = {
      type: control.type,
      attributes: control.attributes,
    };
    return (
      <ControlComponent key={control.uid} {...props} />
    );
  }

  renderField(field) {
    const props = {
      type: field.type,
      attributes: field.attributes,
    };
    return (
      <FieldComponent key={field.uid} {...props} />
    );
  }

  render() {
    return (
      <IntlProvider messages={this.props.messages}>
        <Container>
          <Form>
            {
              this.renderForm()
            }
          </Form>
        </Container>
      </IntlProvider>
    );
  }
}
