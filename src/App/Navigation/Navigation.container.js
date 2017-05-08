import { StackNavigator, DrawerNavigator } from 'react-navigation';
import React from 'react';

// app
import HomeContainer from '../Home';
import framework from '../../Framework';
import NavHeaderContainer from './NavHeader';
import MenuComponent from './Menu';

const stackConfig = {
  headerMode: 'float',
  navigationOptions: {
    header: headerProps => <NavHeaderContainer {...headerProps} />
  }
};

const NavigationContainer = new DrawerNavigator(Object.assign({
  Home: {
    screen: new StackNavigator({
      Home: { screen: HomeContainer },
    }, stackConfig)
  }
}, Object.assign(...framework.map(view => {
  const { routeName, screen } = view;
  return {
    [routeName]: {
      screen: new StackNavigator({
        [view.routeName]: { screen }
      }, stackConfig)
    }
  };
}))), {
  contentComponent: props => <MenuComponent {...props} />
});

export default NavigationContainer;
