import React from 'react';
import { ListItem } from 'native-base';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';

// app
import MenuComponent from '../Menu.component';

// framework
import routes from '../../../../Framework';

const props = {
  navigation: { navigate: sinon.spy() }
};
const labels = routes.map(route => route.screen.navigationOptions.drawerLabel);

test('MenuComponent should render correctly', () => {
  const wrapper = shallow(<MenuComponent {...props} />);
  expect(wrapper).toMatchSnapshot();
});

['Home', ...labels].forEach(route => {
  describe(`component <ListItem>${route}</ListItem>`, () => {
    const consoleError = global.console.error;
    let menuProps;
    beforeEach(() => {
      global.console.error = jest.fn();
      menuProps = {
        navigation: { navigate: sinon.spy() }
      };
    });

    it(`should navigate to ${route} on Item press`, () => {
      const wrapper = mount(<MenuComponent {...menuProps} />);
      wrapper.find(ListItem).findWhere(node => node.text() === route).at(1).props()
      .onPress();
      expect(menuProps.navigation.navigate.calledOnce).toBeTruthy();
    });

    afterEach(() => {
      global.console.error = consoleError;
    });
  });
});
