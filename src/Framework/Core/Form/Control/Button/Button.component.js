import React, { Component, PropTypes } from 'react';
import { Button, Text } from 'native-base';
import { FormattedMessage, } from 'react-intl';
import renderIf from 'render-if';

export default class ButtonComponent extends Component {
  static propTypes = {
    label: PropTypes.oneOf([PropTypes.string.isRequired, PropTypes.object.isRequired]).isRequired,
  }

  render() {
    const { label } = this.props;

    return (
      <Button>
        {renderIf(typeof this.props.label === 'string')(
          <Text>label</Text>
        )}
        {renderIf(typeof this.props.label === 'object')(
          <FormattedMessage id={label.code} values={label.values} />
        )}
      </Button>
    );
  }
}
