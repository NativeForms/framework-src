import React from 'react';
import { shallow } from 'enzyme';

// app
import NavHeaderComponent from '../NavHeader.component';

const props = {
  scene: {},
  getScreenDetails: () => ({ options: {} }),
  onToggleMenu: jest.fn()
};

test('NavHeader should render correctly', () => {
  const wrapper = shallow(<NavHeaderComponent {...props} />);
  expect(wrapper).toMatchSnapshot();
});
