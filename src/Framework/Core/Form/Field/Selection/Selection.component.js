import React, { Component, PropTypes } from 'react';
import { List, ListItem, Body, Text } from 'native-base';
import { injectIntl } from 'react-intl';

import BoxComponent from './Selection.box';
import RadioComponent from './Selection.radio';

class SelectionComponent extends Component {
  static propTypes = {
    label: PropTypes.string,
    selectionList: PropTypes.array,
    radioBoxType: PropTypes.bool,
  }

  static defaultProps = {
    label: null,
    selectionList: null,
    radioBoxType: false,
  }

  render() {
    const { label, selectionList, radioBoxType } = this.props;
    let childItems = null;
    if (radioBoxType) {
      childItems = selectionList.map((item) =>
        <RadioComponent key={item.uid} {...item} />
      );
    } else {
      childItems = selectionList.map((item) =>
        <BoxComponent key={item.uid} {...item} />
      );
    }
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
