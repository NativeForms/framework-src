export const Actions = {
  INCREMENT: 'increment',
  INCREMENT_IF_ODD: 'incrementIfOdd',
  INCREMENT_ASYNC: 'incrementAsync',
  DECREMENT: 'decrement',
};

export const increment = () => ({ type: Actions.INCREMENT });
export const decrement = () => ({ type: Actions.DECREMENT });
export const incrementIfOdd = () => ({ type: Actions.INCREMENT_IF_ODD });
export const incrementAsync =
  (dispatch, delay = 1000) => ({ type: Actions.INCREMENT_ASYNC, delay });
