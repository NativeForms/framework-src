import React from 'react';
import { Button } from 'native-base';
import renderer from 'react-test-renderer';


//button-framework
import ButtonComponent from '../Button.component';
//import i18n from '../Button.i18n';

describe('components <ButtonComponent />', () => {

  it('renders lebel button', () => {
    const tree = renderer.create(
       <Button>
           Test
       </Button>
   ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
