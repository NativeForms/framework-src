import React from 'react';
import { shallow } from 'enzyme';
import SelectionContainer from '../Selection.container';

describe('container <SelectionContainer />', () => {
  it('container render correctly', () => {
    const wrapper = shallow(<SelectionContainer />);
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
