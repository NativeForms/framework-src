import React from 'react';
import Immutable from 'immutable';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

// app
import AppContainer from '../App.container';
import initialState from '../Navigation/Navigation.state';

const mockStore = configureMockStore([]);

test('AppContainer should render correctly', () => {
  const wrapper = shallow(<AppContainer />, {
    context: { store: mockStore(Immutable.Map({ nav: initialState })) }
  });
  expect(wrapper.dive()).toMatchSnapshot();
});
