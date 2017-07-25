import React from 'react';
import { Button, Text } from 'native-base';
import renderer from 'react-test-renderer';


//button-framework
import ButtonComponent from '../Button.component';
import i18n from '../Button.i18n';

const messages = i18n.en;


describe('components <ButtonComponent />', () => {

  it('renders lebel button correctly', () => {
    const tree = renderer.create(
       <Button>
           <Text>{messages.myLabel}</Text>
       </Button>
   ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
