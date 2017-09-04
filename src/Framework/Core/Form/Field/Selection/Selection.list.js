import React, { Component, PropTypes } from 'react';
import { ListItem, CheckBox, Body, Text } from 'native-base';
/*import { CheckBox } from 'react-native-elements';*/
import { injectIntl } from 'react-intl';

class ListComponent extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    uid: PropTypes.string
  }

  static defaultProps = {
    checked: false,
    uid: null
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
      <ListItem key={this.props.uid}>
        <CheckBox checked={this.state.checked} onPress={this.clickSelection}>
          <Body>
            <Text>TEST { this.props.uid }</Text>
          </Body>
        </CheckBox>
      </ListItem>
    );
  }
}

export default injectIntl(ListComponent);
