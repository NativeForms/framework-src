import React from 'react';
import { shallow } from 'enzyme';
import LoginContainer from '../Login.container';

describe('container <LoginContainer />', () => {
  it('container render correctly', () => {
    const wrapper = shallow(
      <LoginContainer />
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
});

