import React from 'react';

// framework
import HomeComponent from '../Home.component';
import i18n from '../Home.i18n';

// shared
import { shallowWithIntl } from '../../../Shared/intl-enzyme-test-helper';

const messages = i18n.en;

test('HomeComponent should render correctly', () => {
  const wrapper = shallowWithIntl(<HomeComponent />, {}, messages);
  expect(wrapper.dive()).toMatchSnapshot();
});
