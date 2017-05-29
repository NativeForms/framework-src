import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { Item, Input, Label, Icon } from 'native-base';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

class TextInputComponent extends Component {
  static propTypes = {
    defaultText: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    value: PropTypes.string,
    headerLabel: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    hiddenText: PropTypes.bool,
    footDescription: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
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
    const { headerLabel, label, footDescription, clearButton, hiddenText, intl } = this.props;
    let { defaultText } = this.props;
    if (defaultText && typeof defaultText === 'object') {
      defaultText = intl.formatMessage({ id: defaultText.code }, defaultText.values);
    }
    return (
      <View>
        {headerLabel && typeof headerLabel === 'string' &&
          <Label>{headerLabel}</Label>
        }
        {headerLabel && typeof headerLabel === 'object' &&
          <Label><FormattedMessage id={headerLabel.code} values={headerLabel.values} /></Label>
        }
        <Item underline>
          {label && typeof label === 'string' &&
            <Label>{label}</Label>
          }
          {label && typeof label === 'object' &&
            <Label><FormattedMessage id={headerLabel.code} values={headerLabel.values} /></Label>
          }
          <Input
            ref={component => { this.textInput = component; }}
            value={this.state.value}
            placeholder={defaultText}
            secureTextEntry={hiddenText}
          />

          {clearButton &&
            <Icon active name="backspace" onPress={this.clearInput} />
          }
        </Item>
        {footDescription && typeof footDescription === 'string' &&
          <Label>{footDescription}</Label>
        }
        {footDescription && typeof footDescription === 'object' &&
          <Label>
            <FormattedMessage id={footDescription.code} values={footDescription.values} />
          </Label>
        }
      </View>
    );
  }
}


export default injectIntl(TextInputComponent);
