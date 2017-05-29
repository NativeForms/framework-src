import * as Core from './Core';
import Counter, { CounterActions, CounterEpics, counterReducer } from './Counter';
import { route as loginRoute } from './Login';

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
  loginRoute,
];

export default [
  ...Core.forms,
  ...demos
];
