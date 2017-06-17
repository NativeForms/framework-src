import { expect } from 'chai';
import Immutable from 'immutable';
import configureMockStore from 'redux-mock-store';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

// framework
import * as actions from '../Counter.actions';
import * as epics from '../Counter.epics';
import initialState from '../Counter.state';

const { Actions } = actions;

describe('actions', () => {
  it('increment should create increment action', () => {
    expect(actions.increment()).to.eql({ type: Actions.INCREMENT });
  });

  it('decrement should create decrement action', () => {
    expect(actions.decrement()).to.eql({ type: Actions.DECREMENT });
  });

  it('incrementIfOdd should create incrementIfOdd action', () => {
    expect(actions.incrementIfOdd()).to.eql({ type: Actions.INCREMENT_IF_ODD });
  });

  it('incrementAsync should create incrementAsync action', () => {
    expect(actions.incrementAsync()).to.eql({ type: Actions.INCREMENT_ASYNC, delay: 1000 });
  });
});

const rootEpic = combineEpics(
  epics.incrementIfOdd,
  epics.incrementAsync
);
const epicMiddleware = createEpicMiddleware(rootEpic);
const mockStore = configureMockStore([epicMiddleware]);

function cleanUpEpic() {
  epicMiddleware.replaceEpic(rootEpic);
}

describe('incrementIfOdd', () => {
  afterEach(cleanUpEpic);

  it('incrementIfOdd should create increment action', () => {
    const incrementIfOdd = actions.incrementIfOdd();
    const store = mockStore(Immutable.Map({ counter: Immutable.fromJS({ counter: 1 }) }));
    store.dispatch(incrementIfOdd);
    expect(store.getActions()).to.eql([
      incrementIfOdd,
      actions.increment()
    ]);
  });

  it('incrementIfOdd shouldnt create increment action if counter is even', () => {
    const incrementIfOdd = actions.incrementIfOdd();
    const store = mockStore(Immutable.Map({ counter: initialState }));
    store.dispatch(incrementIfOdd);
    expect(store.getActions()).to.eql([
      incrementIfOdd
    ]);
  });
});

describe('incrementAsync', () => {
  let store;

  beforeEach(() => {
    store = mockStore(Immutable.Map({ counter: initialState }));
  });

  afterEach(cleanUpEpic);

  // There's no nice way to test this at the moment...
  it('incrementAsync should create increment action', done => {
    const incrementAsync = { type: Actions.INCREMENT_ASYNC, delay: 1 };
    store.dispatch(incrementAsync);
    setTimeout(() => {
      expect(store.getActions()).to.eql([
        incrementAsync,
        actions.increment()
      ]);
      done();
    }, 5);
  });
});
