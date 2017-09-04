import React, { Component, PropTypes } from 'react';
import { ListItem, Radio, Text, Right } from 'native-base';
import { injectIntl } from 'react-intl';

class RadioComponent extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    key: PropTypes.string,
    itemLabel: PropTypes.string,
  }

  static defaultProps = {
    checked: false,
    key: null,
    itemLabel: null,
  }

  render() {
    return (
      <ListItem key={this.props.key}>
        <Text>{ this.props.itemLabel }</Text>
        <Right>
          <Radio selected={this.props.checked} />
        </Right>
      </ListItem>
    );
  }
}

export default injectIntl(RadioComponent);
