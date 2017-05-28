import * as Core from './Core';
import Counter, { CounterActions, CounterEpics, counterReducer } from './Counter';

export const actionCreators = [
  CounterActions,
];

export const reducers = {
  counter: counterReducer,
};

export const epics = Object.assign({},
  CounterEpics,
);

export const forms = Core.forms;
export const demos = [
  {
    routeName: 'Counter',
    screen: Counter
  },
];

export default [
  ...Core.forms,
  ...demos
];
