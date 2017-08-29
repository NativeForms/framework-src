import React, { Component, PropTypes } from 'react';
//import { Text } from 'react-native';
import { CheckBox, ListItem} from 'native-base';

class SelectionComponent extends Component {
  /*static propTypes = {
    label: PropTypes.string,
    selectionList: PropTypes.object,
    radioBoxType: PropTypes.bool, 
  }*/
  render() {
    return (
      <ListItem>
        <CheckBox checked={false} />
      </ListItem>
    );
  }
}
