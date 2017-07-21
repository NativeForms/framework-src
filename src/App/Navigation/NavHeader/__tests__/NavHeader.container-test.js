import React from 'react';
import { Button } from 'native-base';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';

// app
import NavHeaderContainer from '../NavHeader.container';

const props = {
  navigation: { navigate: sinon.spy() },
  scene: {},
  getScreenDetails: sinon.spy(() => ({ options: {} }))
};

describe('components <NavHeaderContainer />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<NavHeaderContainer {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  const consoleError = global.console.error;
  beforeEach(() => {
    global.console.error = jest.fn();
  });

  it('should toggleMenu on button press', () => {
    const wrapper = mount(<NavHeaderContainer {...props} />);
    wrapper.find(Button).props().onPress();
    expect(props.navigation.navigate.calledOnce).toBeTruthy();
    expect(props.getScreenDetails.calledOnce).toBeTruthy();
  });

  afterEach(() => {
    global.console.error = consoleError;
  });
});
