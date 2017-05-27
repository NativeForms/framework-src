import React, { Component, PropTypes } from 'react';
import { Content, Item, Input, Label, Text, Button } from 'native-base';
import renderIf from 'render-if';

class TextInputComponent extends Component {
  static propTypes = {
    defaultText: PropTypes.string.isRequired,
    value: PropTypes.string,
    headerLabel: PropTypes.string,
    label: PropTypes.string,
    hiddenText: PropTypes.bool,
    footDescription: PropTypes.string,
    clearButton: PropTypes.bool,
    error: PropTypes.string, //TODO -
  }

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
    this.clearInput = this.clearInput.bind(this);
  }

  clearInput() {
    this.textInput._root.clear();
  }

  render() {
    return (
      <Content>
        {renderIf(this.props.headerLabel !== '')(
          <Label>{this.props.headerLabel}</Label> //when on, will appear on top of text input
        )}

        <Item underline>
          {renderIf(this.props.label !== '')(
            <Label>{this.props.label}</Label> //when on, will appear left to text input
          )}
          <Input
          ref = {component => this.textInput = component}
          value = {this.state.value}
          placeholder= {this.props.defaultText}
          secureTextEntry = {this.props.hiddenText}/>

          {renderIf(this.props.clearButton)(
            <Icon active name='backspace' onPress={this.clearInput}/>
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
