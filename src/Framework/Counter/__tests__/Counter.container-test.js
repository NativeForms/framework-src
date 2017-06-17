import React from 'react';
import Immutable from 'immutable';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

// framework
import CounterContainer from '../Counter.container';
import initialState from '../Counter.state';

const mockStore = configureMockStore([]);

test('CounterContainer should render correctly', () => {
  const wrapper = shallow(<CounterContainer />, {
    context: { store: mockStore(Immutable.Map({ counter: initialState })) }
  });
  expect(wrapper.dive()).toMatchSnapshot();
  wrapper.setContext({
    context: { store: mockStore(Immutable.Map({ counter: Immutable.fromJS({ counter: 1 }) })) }
  });
  expect(wrapper.dive()).toMatchSnapshot();
});
