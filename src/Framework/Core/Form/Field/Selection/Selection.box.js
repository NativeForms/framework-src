import React, { Component, PropTypes } from 'react';
import { ListItem, CheckBox, Body, Text } from 'native-base';
/*import { CheckBox } from 'react-native-elements';*/
import { injectIntl } from 'react-intl';

class BoxComponent extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    key: PropTypes.string,
    itemLabel: PropTypes.string
  }

  static defaultProps = {
    checked: false,
    key: null,
    itemLabel: null
  }

  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked,
    };
    this.clickSelection = this.clickSelection.bind(this);
  }
  clickSelection() {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    return (
      <ListItem key={this.props.key}>
        <CheckBox checked={this.state.checked} onPress={this.clickSelection} />
        <Body>
          <Text>{ this.props.itemLabel }</Text>
        </Body>
      </ListItem>
    );
  }
}

export default injectIntl(BoxComponent);
