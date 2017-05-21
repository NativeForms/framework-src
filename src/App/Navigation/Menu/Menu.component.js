import React, { Component, PropTypes } from 'react';
import { Content, List, ListItem, Text } from 'native-base';

// App
import i18n from './Menu.i18n';
import { getLocale } from '../../../Shared/utils';

// framework
import { demos } from '../../../Framework';

const messages = i18n[getLocale()];

export default class MenuComponent extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  render() {
    const { navigation } = this.props;
    return (
      <Content>
        <List>
          <ListItem
            button onPress={() => {
              navigation.navigate('Home');
            }}
          >
            <Text>{messages.home}</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>Items</Text>
          </ListItem>
          <ListItem>
            <Text>Item 1</Text>
          </ListItem>
          <ListItem>
            <Text>Item 2</Text>
          </ListItem>
          <ListItem>
            <Text>Item 3</Text>
          </ListItem>
        </List>
        <ListItem itemDivider>
          <Text>{messages.demos}</Text>
        </ListItem>
        {demos.map(view => {
          const { routeName, screen } = view;
          const label = screen.navigationOptions.drawerLabel;
          return (<ListItem
            button onPress={() => {
              navigation.navigate(routeName);
            }} key={label}
          >
            <Text>{label}</Text>
          </ListItem>);
        })}
      </Content>
    );
  }
}
