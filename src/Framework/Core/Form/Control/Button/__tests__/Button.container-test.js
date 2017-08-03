import React from 'react';
import { shallow } from 'enzyme';
import ButtonContainer from '../Button.container';

describe('container <ButtonContainer />', () => {
  it('container render correctly', () => {
    const wrapper = shallow(
      <ButtonContainer />
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
