import React from 'react';
import { mount } from 'enzyme';

// app
import NavigationContainer from '../Navigation.container';

describe('components <NavigationContainer />', () => {
  const consoleError = global.console.error;
  beforeEach(() => {
    global.console.error = jest.fn();
  });

  it('should render correctly', () => {
    const wrapper = mount(<NavigationContainer />);
    expect(wrapper).toMatchSnapshot();
  });

  afterEach(() => {
    global.console.error = consoleError;
  });
});
