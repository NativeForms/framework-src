import React, { Component, PropTypes } from 'react';
import { Button, Text } from 'native-base';
import { FormattedMessage, } from 'react-intl';

export default class ButtonComponent extends Component {
  static propTypes = {
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]).isRequired,
  }

  render() {
    const { label } = this.props;

    return (
      <Button>
        {typeof label === 'string' &&
          <Text>{label}</Text>
        }
        {label && typeof label === 'object' &&
          <Text><FormattedMessage id={label.code} values={label.values} /></Text>
        }
      </Button>
    );
  }
}
