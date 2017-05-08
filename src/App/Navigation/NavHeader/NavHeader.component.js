import React, { Component, PropTypes } from 'react';
import { Left, Right, Header, Button, Icon, Body, Title } from 'native-base';

export default class NavHeaderComponent extends Component {
  static propTypes = {
    scene: PropTypes.object.isRequired,
    getScreenDetails: PropTypes.func.isRequired,
    onToggleMenu: PropTypes.func.isRequired
  }

  render() {
    const { onToggleMenu, scene, getScreenDetails } = this.props;
    const screen = getScreenDetails(scene);
    return (
      <Header>
        <Left>
          <Button transparent onPress={onToggleMenu}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>{screen.options.title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}
