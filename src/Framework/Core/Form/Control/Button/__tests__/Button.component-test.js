import React from 'react';
import { shallow } from 'enzyme';
import ButtonComponent from '../Button.component';
import i18n from '../Button.i18n';

const messages = i18n.en;

describe('components <ButtonComponent />', () => {
  it('renders lebel button correctly -- string type', () => {
    const props = {
      label: messages.title
    };
    const wrapper = shallow(
      <ButtonComponent {...props} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders lebel button correctly -- object type', () => {
    const props = {
      label: {
        code: messages.myLabel
      }
    };
    const wrapper = shallow(
      <ButtonComponent {...props} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
