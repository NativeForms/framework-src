import React, { PropTypes } from 'react';

//button-framework
import ButtonComponent from '../Button.component';
import i18n from '../Button.i18n';

import {shallowWithIntl} from '../../../../../../Shared/intl-enzyme-test-helper';

const props = {
      label: "test"
    }

const messages = i18n.en;

describe('components <ButtonComponent />', () => {
  let wrapper;

  it('renders lebel button correctly', () => {
    wrapper = shallowWithIntl(<ButtonComponent {...props} />, {}, messages);
    expect(wrapper).toMatchSnapshot();
  });

});
