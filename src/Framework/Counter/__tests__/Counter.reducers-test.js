import { expect } from 'chai';
import Immutable from 'immutable';

// framework
import counter from '../Counter.reducers';

describe('reducers', () => {
  describe('counter', () => {
    it('should handle initial state', () => {
      expect(counter(undefined, {}).get('counter')).to.equal(0);
    });

    it('should handle increment', () => {
      expect(
        counter(Immutable.Map({ counter: 1 }), { type: 'increment' }).get('counter')
      ).to.equal(2);
    });

    it('should handle decrement', () => {
      expect(
        counter(Immutable.Map({ counter: 1 }), { type: 'decrement' }).get('counter')
      ).to.equal(0);
    });

    it('should handle unknown action type', () => {
      expect(counter(1, { type: 'unknown' })).to.equal(1);
    });
  });
});
