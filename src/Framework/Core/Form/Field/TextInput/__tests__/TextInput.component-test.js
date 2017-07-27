import React from 'react';

// framework
import TextInputComponent from '../TextInput.component';
import i18n from '../TextInput.i18n';
import schema from '../TextInput.schema';

//shared
import { shallowWithIntl } from '../../../../../../Shared/intl-enzyme-test-helper';

const message = i18n.en;
const propsArray = schema.attributes.formComponents;


describe('components <TextInputComponent />', () => {
  let wrapper;
  propsArray.forEach((props) => {
    it('renders text input component correctly', () => {
      wrapper = shallowWithIntl(
        <TextInputComponent {...props.attributes} />, {}, message
    );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
