import React from 'react';
import { mount } from 'enzyme';
import TextInputComponent from '../TextInput.container';

describe('container <TextInputComponent />', () => {
  it('container render correctly', () => {
    const wrapper = mount(
      <TextInputComponent />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
