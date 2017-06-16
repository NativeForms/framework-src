import React from 'react';
import { TouchableHighlight } from 'react-native';
import sinon from 'sinon';
import Immutable from 'immutable';

// framework
import CounterComponent from '../Counter.component';
import initialState from '../Counter.state';
import i18n from '../Counter.i18n';
import { shallowWithIntl } from '../../../Shared/intl-enzyme-test-helper';

const messages = i18n.en;

const props = {
  counter: initialState,
  increment: sinon.spy(),
  decrement: sinon.spy(),
  incrementIfOdd: sinon.spy(),
  incrementAsync: sinon.spy(),
};

describe('components <CounterComponent />', () => {
  let wrapper;

  it('should render correctly', () => {
    wrapper = shallowWithIntl(<CounterComponent {...props} />, {}, messages);
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ counter: Immutable.Map({ counter: 1 }) });
    expect(wrapper).toMatchSnapshot();
  });

  ['increment', 'decrement', 'incrementIfOdd', 'incrementAsync']
    .forEach((func, i) => {
      it(`should call ${func} with TouchableHighlight on press`, () => {
        wrapper = shallowWithIntl(<CounterComponent {...props} />, {}, messages);
        wrapper.dive().dive().find(TouchableHighlight).at(i)
          .simulate('press');
        expect(props[func].calledOnce).toBeTruthy();
      });
    });
});
