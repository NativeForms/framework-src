import React, { Component, PropTypes } from 'react';
import { Content, List, ListItem, Text } from 'native-base';

// framework
import { demos } from '../../../Framework';

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
            <Text>Home</Text>
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
          <Text>Demos</Text>
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
