import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Immutable from 'immutable';
import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import CounterComponent from '../../src/Framework/Counter/Counter.component';

const props = {
  counter: Immutable.Map({ counter: 1 }),
  increment: sinon.spy(),
  decrement: sinon.spy(),
  incrementIfOdd: sinon.spy(),
  incrementAsync: sinon.spy()
};

test.skip('components <CounterComponent />', function spec() {
  this.timeout(5000);

  it('should render correctly', () => {
    const wrapper = shallow(<CounterComponent {...props} />);
    expect(wrapper.find(View)).to.have.length(1);
    const view = wrapper.find(View);
    expect(view.find(Text)).to.have.length(5);
    expect(view.find(Text).node.props.children).to.eql(['Clicked: ', 1, ' times']);
    const touchs = view.find(TouchableHighlight);
    expect(touchs).to.have.length(4);
    ['+', '-', 'Increment if odd', 'Increment async'].forEach((text, i) => {
      expect(touchs.at(i).find(Text).node.props.children).to.equal(text);
    });
  });

  ['increment', 'decrement', 'incrementIfOdd', 'incrementAsync']
    .forEach((func, i) => {
      it(`should call ${func} with TouchableHighlight on press`, () => {
        const wrapper = shallow(<CounterComponent {...props} />);
        wrapper.find(View).find(TouchableHighlight).nodes[i].props.onPress();
        expect(props[func].calledOnce).to.be.true;
      });
    });
});
