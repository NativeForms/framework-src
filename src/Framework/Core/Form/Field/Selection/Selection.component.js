import React, { Component } from 'react';
//import { Text } from 'react-native';
import { CheckBox, ListItem } from 'native-base';
import { injectIntl } from 'react-intl';

class SelectionComponent extends Component {
  /*static propTypes = {
    label: PropTypes.string,
    selectionList: PropTypes.object,
    radioBoxType: PropTypes.bool
  }*/
  render() {
    return (
      <ListItem>
        <CheckBox checked={false} />
      </ListItem>
    );
  }
}

export default injectIntl(SelectionComponent);