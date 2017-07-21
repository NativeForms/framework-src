import { expect } from 'chai';

// app
import navigation from '../Navigation.reducers';
import initialState from '../Navigation.state';

describe('test navigation reducers', () => {
  it('should handle initial state', () => {
    expect(navigation(undefined, {})).to.equal(initialState);
  });
});
