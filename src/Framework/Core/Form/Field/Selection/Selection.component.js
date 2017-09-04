import React, { Component, PropTypes } from 'react';
import { List, ListItem, Body, Text } from 'native-base';
import { injectIntl } from 'react-intl';

import ListComponent from './Selection.list';

class SelectionComponent extends Component {
  static propTypes = {
    label: PropTypes.string,
    selectionList: PropTypes.array
  }

  static defaultProps = {
    label: null,
    selectionList: null
  }

  render() {
    const { label, selectionList } = this.props;
    const childItems = selectionList.map((item) =>
      <ListComponent key={item.uid} {...item} />
    );
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
