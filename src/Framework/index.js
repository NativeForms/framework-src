import * as Core from './Core';
import { route as counterRoute, CounterActions, CounterEpics, counterReducer } from './Counter';
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
  counterRoute,
  loginRoute,
];

export default [
  ...Core.forms,
  ...demos
];
