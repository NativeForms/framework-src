import React from 'react';
import { shallow } from 'enzyme';
import ControlComponent from '../Control.component';

describe('components <ControlComponent />', () => {
  it('renders label button component correctly', () => {
    const props = {
      type: 'button',
      attributes: {
        label: 'button test'
      }
    };
    const wrapper = shallow(
      <ControlComponent {...props} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders label link component correctly', () => {
    const props = {
      type: 'link',
      attributes: {
        label: 'link test',
        route: 'http://www.google.com'
      }
    };
    const wrapper = shallow(
      <ControlComponent {...props} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
