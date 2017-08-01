import React from 'react';
import { Input, Icon } from 'native-base';

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
    });
    if (props.attributes.clearButton) {
      it('clearButton works correctly', () => {
        wrapper = mountWithIntl(<TextInputComponent {...props.attributes} />, {}, message);
        wrapper.find(Icon).props().onPress();
        expect(wrapper.find(Input).props().value).toHaveLength(0);
      });
    }
    it('set value works correctly', () => {
      wrapper = mountWithIntl(<TextInputComponent {...props.attributes} />, {}, message);
      const mockValue = 'test input text';
      wrapper.find(Input).props().onChangeText(mockValue);
      expect(wrapper.find(Input).props().value).toMatch(mockValue);
    });
    it('measure works correctly', () => {
      wrapper = mountWithIntl(<TextInputComponent {...props.attributes} />, {}, message);
      const mockHight = {
        nativeEvent: {
          contentSize: { height: 10 }
        } };
      wrapper.find(Input).props().onContentSizeChange(mockHight);
      expect(
        wrapper.find(Input).props().style.height
      ).toEqual(mockHight.nativeEvent.contentSize.height);
    });
  });
});
