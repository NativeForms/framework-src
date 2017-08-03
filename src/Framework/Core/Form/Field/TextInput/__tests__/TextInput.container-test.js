import React from 'react';
import { shallow } from 'enzyme';
import TextInputContainer from '../TextInput.container';

describe('container <TextInputContainer />', () => {
  it('container render correctly', () => {
    const wrapper = shallow(<TextInputContainer />);
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
