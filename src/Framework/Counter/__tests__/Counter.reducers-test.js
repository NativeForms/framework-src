import { expect } from 'chai';
import Immutable from 'immutable';

// framework
import counter from '../Counter.reducers';
import { Actions } from '../Counter.actions';

describe('test counter reducers', () => {
  it('should handle initial state', () => {
    expect(counter(undefined, {}).get('counter')).to.equal(0);
  });

  it('should handle increment', () => {
    expect(
      counter(Immutable.Map({ counter: 1 }), { type: Actions.INCREMENT }).get('counter')
    ).to.equal(2);
  });

  it('should handle decrement', () => {
    expect(
      counter(Immutable.Map({ counter: 1 }), { type: Actions.DECREMENT }).get('counter')
    ).to.equal(0);
  });

  it('should handle unknown action type', () => {
    expect(counter(1, { type: 'unknown' })).to.equal(1);
  });
});
