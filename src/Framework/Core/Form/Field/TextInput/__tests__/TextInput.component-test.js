import React from 'react';
import injectIntl from 'react-intl';

// framework
import TextInputComponent from '../TextInput.component';
import i18n from '../TextInput.i18n';
import schema from '../TextInput.schema';

//shared
import { mountWithIntl } from '../../../../../../Shared/intl-enzyme-test-helper';

const message = i18n.en;
const propsArray = schema.attributes.formComponents;


describe('components <TextInputComponent />', () => {
  let wrapper;
  propsArray.forEach((props) => {
    it('renders text input component correctly', () => {
      wrapper = mountWithIntl(<TextInputComponent {...props.attributes} />, {}, message);
      expect(wrapper).toMatchSnapshot();
      if (props.attributes.clearButton) {
        wrapper = mountWithIntl(<TextInputComponent {...props.attributes} />, {}, message);
        expect(wrapper.find('value')).toHaveLength(0);
      }
    });
  });
});
