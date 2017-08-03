import React from 'react';
import { shallow } from 'enzyme';
import FormComponent from '../Form.component';

//schema
import schemaControlButton from '../Control/Button/Button.schema';
import schemaControlLink from '../Control/Link/Link.schema';
import schemaFieldTextInput from '../Field/TextInput/TextInput.schema';
//message
import messageControlButton from '../Control/Button/Button.i18n';
import messageControlLink from '../Control/Link/Link.i18n';
import messageFieldTextInout from '../Field/TextInput/TextInput.i18n';

const propsArray = [
  {
    schema: schemaControlButton,
    message: messageControlButton.en
  },
  {
    schema: schemaControlLink,
    message: messageControlLink.en
  },
  {
    schema: schemaFieldTextInput,
    message: messageFieldTextInout.en
  }
];

describe('components <FormComponent />', () => {
  let wrapper;
  propsArray.forEach((props) => {
    it('renders form components correctly', () => {
      wrapper = shallow(
        <FormComponent {...props} />
    );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
