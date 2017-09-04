import React from 'react';

import SelectionComponent from '../Selection.component';
import i18n from '../Selection.i18n';
import schema from '../Selection.schema';

//shared
import { mountWithIntl } from '../../../../../../Shared/intl-enzyme-test-helper';

const message = i18n.en;
const propsArray = schema.attributes.formComponents;

describe('components <SelectionComponent />', () => {
  let wrapper;
  propsArray.forEach((props) => {
    const { attributes, ...rest } = props;
    it('renders text input component correctly', () => {
      wrapper = mountWithIntl(<SelectionComponent {...rest} />, {}, message);
      expect(wrapper.find('SelectionComponent')).toMatchSnapshot();
    });
  });
});
