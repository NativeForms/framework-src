import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
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
    clearButton: PropTypes.bool,
    multiline: PropTypes.bool,
    intl: intlShape.isRequired,
  }

  static defaultProps = {
    defaultText: null,
    value: null,
    headerLabel: null,
    label: null,
    hiddenText: null,
    clearButton: false,
    multiline: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
    this.measure = this.measure.bind(this);
    this.setValue = this.setValue.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  setValue(value) {
    this.setState({ value });
  }

  measure(event) {
    this.setState({ height: event.nativeEvent.contentSize.height });
  }

  clearInput() {
    this.setState({ value: '' });
  }

  render() {
    const { headerLabel, clearButton, hiddenText, multiline, intl } = this.props;
    let { label, defaultText } = this.props;
    const props = {
      stackedLabel: !!headerLabel,
    };
    if (headerLabel) {
      label = headerLabel;
    }
    if (defaultText && typeof defaultText === 'object') {
      defaultText = intl.formatMessage({ id: defaultText.code }, defaultText.values);
    }
    return (
      <Item {...props}>
        {label && typeof label === 'string' &&
          <Label><Text>{label}</Text></Label>
        }
        {label && typeof label === 'object' &&
          <Label><Text><FormattedMessage id={label.code} values={label.values} /></Text></Label>
        }
        <Input
          ref={component => { this.textInput = component; }}
          value={this.state.value}
          onChangeText={this.setValue}
          placeholder={defaultText}
          secureTextEntry={hiddenText}
          multiline={multiline}
          onContentSizeChange={this.measure}
          style={{ height: this.state.height }}
        />

        {clearButton &&
          <Icon active name="backspace" onPress={this.clearInput} />
        }
      </Item>
    );
  }
}


export default injectIntl(TextInputComponent);
