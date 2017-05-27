import React, { Component, PropTypes } from 'react';
import { Button, Text } from 'native-base';

export default class ButtonComponent extends Component {
  static propTypes = {
    label: React.PropTypes.string.isRequired,
  }

  render() {
    const { label } = this.props;

    return (
      <Button>
        <Text>{label}</Text>
      </Button>
    );
  }
}
