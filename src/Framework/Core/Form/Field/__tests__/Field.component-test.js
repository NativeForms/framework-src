import React from 'react';
import { shallow } from 'enzyme';
import FieldComponent from '../Field.component';

describe('components <FieldComponent />', () => {
  it('renders text input component correctly', () => {
    const props = {
      type: 'text',
      attributes: {
        label: 'text input test'
      }
    };
    const wrapper = shallow(
      <FieldComponent {...props} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
