import React from 'react';
import { shallow } from 'enzyme';
import LinkComponent from '../Link.component';
import i18n from '../Link.i18n';

const messages = i18n.en;
const mockRoute = 'http://www.google.com';

describe('components <LinkComponent />', () => {
  it('renders correctly -- string type', () => {
    const props = {
      label: messages.title,
      route: mockRoute
    };
    const wrapper = shallow(
      <LinkComponent {...props} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly -- object type', () => {
    const props = {
      label: {
        code: messages.googleLabel
      },
      route: mockRoute
    };
    const wrapper = shallow(
      <LinkComponent {...props} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
