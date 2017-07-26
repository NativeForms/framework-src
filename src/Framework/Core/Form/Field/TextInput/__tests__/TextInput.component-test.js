import React from 'react';
import { intlShape } from 'react-intl';

// framework
import TextInputComponent from '../TextInput.component';
import i18n from '../TextInput.i18n';
import schema from '../TextInput.schema';

// shared 
import { shallowWithIntl } from '../../../../../../Shared/intl-enzyme-test-helper';

const message = i18n.en;
const props = schema.attributes.formComponents;


describe('components <TextInputComponent />', () => {
  let wrapper;
  props.forEach((prop) => {
    it('renders text input component correctly', () => {
      wrapper = shallowWithIntl(
        <TextInputComponent {...prop.attributes} />, {}, message
    );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
