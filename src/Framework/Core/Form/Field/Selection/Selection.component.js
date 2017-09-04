import React, { Component, PropTypes } from 'react';
import { List, ListItem, Body, Text } from 'native-base';
/*import { CheckBox } from 'react-native-elements';*/
import { injectIntl } from 'react-intl';

import ListComponent from './Selection.list';

class SelectionComponent extends Component {
  static propType = {
    label: PropTypes.string,
    radionBoxType: PropTypes.bool,
    selectionList: PropTypes.object
  }

  static defaultProps = {
    label: null,
    radionBoxType: false,
    selectionList: null
  }

  render() {
    const { label, radionBoxType, selectionList, color, uid} = this.props;
    const childItems = selectionList.map((item) =>
      <ListComponent key={uid} props={item} />
    );
    /*const props = {

    };*/
    return (
      <List>
        {label &&
          <ListItem itemDivider>
            <Body>
              <Text>{ label }</Text>
            </Body>
          </ListItem>
        }
        { childItems }
      </List>
    );
  }
}

export default injectIntl(SelectionComponent);
