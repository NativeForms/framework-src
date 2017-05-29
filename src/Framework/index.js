import { route as counterRoute, CounterActions, CounterEpics, counterReducer } from './Counter';

export const actionCreators = [
  CounterActions,
];

export const reducers = {
  counter: counterReducer,
};

export const epics = Object.assign({},
  CounterEpics,
);

export const items = [

];

export const demos = [
  counterRoute,
];

export default [...items, ...demos];
