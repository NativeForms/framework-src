import React from 'react';
import { shallow } from 'enzyme';
import LinkContainer from '../Link.container';

describe('container <LinkContainer />', () => {
  it('container render correctly', () => {
    const wrapper = shallow(
      <LinkContainer />
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
