import React from 'react';
import { shallow } from 'enzyme';
import TextInputComponent from '../TextInput.container';

describe('container <TextInputComponent />', () => {
  it('container render correctly', () => {
    const wrapper = shallow(<TextInputComponent />);
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
