import React, { Component, PropTypes } from 'react';

// app
import NavHeaderComponent from './NavHeader.component';

export default class NavHeaderContainer extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  onToggleMenu = () => {
    this.props.navigation.navigate('DrawerOpen');
  };

  render() {
    return (<NavHeaderComponent {...this.props} onToggleMenu={this.onToggleMenu} />);
  }
}
