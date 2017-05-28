import React, { Component, PropTypes } from 'react';
import { Content, Item, Input, Label, Icon } from 'native-base';
import {formatMessage, injectIntl, intlShape} from 'react-intl';
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
    intl: intlShape.isRequired,
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
    var defaultText = this.props.intl.formatMessage({id: 'defaultText'}, {defaultText: this.props.defaultText});
    var headerLabel = this.props.intl.formatMessage({id: 'headerLabel'}, {headerLabel: this.props.headerLabel});
    var label = this.props.intl.formatMessage({id: 'label'}, {label: this.props.label});
    var footDescription = this.props.intl.formatMessage({id: 'footDescription'}, {footDescription: this.props.footDescription});

    return (
      <Content>
        {renderIf(this.props.headerLabel !== '')(
          <Label>{headerLabel}</Label>
        )}

        <Item underline>
          {renderIf(this.props.label !== '')(
            <Label>{label}</Label>
          )}
          <Input
            ref={component => { this.textInput = component; }}
            value={this.state.value}
            placeholder={defaultText}
            secureTextEntry={this.props.hiddenText}
          />

          {renderIf(this.props.clearButton)(
            <Icon active name="backspace" onPress={this.clearInput} />
          )}
        </Item>

        {renderIf(this.props.footDescription !== '')(
          <Label> {footDescription} </Label>
        )}
      </Content>
    );
  }
}


export default injectIntl(TextInputComponent);
