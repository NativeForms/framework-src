import Counter from './Counter.container';

export * as CounterActions from './Counter.actions';
export * as CounterEpics from './Counter.epics';
export { default as counterReducer } from './Counter.reducers';

export const route = {
  routeName: 'Counter',
  screen: Counter
};

export default Counter;
