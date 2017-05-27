import React, { Component, PropTypes } from 'react';
import { Content, Item, Input, Label, Icon } from 'native-base';
import renderIf from 'render-if';

class TextInputComponent extends Component {
  static propTypes = {
    defaultText: PropTypes.string,
    value: PropTypes.string,
    headerLabel: PropTypes.string,
    label: PropTypes.string,
    hiddenText: PropTypes.bool,
    footDescription: PropTypes.string,
    clearButton: PropTypes.bool,
  }

  static defaultProps = {
    defaultText: null,
    value: null,
    headerLabel: null,
    label: null,
    hiddenText: null,
    footDescription: null,
    clearButton: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
    this.clearInput = this.clearInput.bind(this);
  }

  clearInput() {
    this.setState({ value: '' });
  }

  render() {
    return (
      <Content>
        {renderIf(this.props.headerLabel !== '')(
          <Label>{this.props.headerLabel}</Label>
        )}

        <Item underline>
          {renderIf(this.props.label !== '')(
            <Label>{this.props.label}</Label>
          )}
          <Input
            ref={component => { this.textInput = component; }}
            value={this.state.value}
            placeholder={this.props.defaultText}
            secureTextEntry={this.props.hiddenText}
          />

          {renderIf(this.props.clearButton)(
            <Icon active name="backspace" onPress={this.clearInput} />
          )}
        </Item>

        {renderIf(this.props.footDescription !== '')(
          <Label> {this.props.footDescription} </Label>
        )}
      </Content>
    );
  }
}


export default TextInputComponent;
