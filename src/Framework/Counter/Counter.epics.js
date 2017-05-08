import Rx from 'rxjs/Rx';
import { Actions, increment } from './Counter.actions';

export const incrementIfOdd = (action$, store) =>
  action$.ofType(Actions.INCREMENT_IF_ODD)
    .filter(() => store.getState().counter.get('counter') % 2 === 1)
    .mapTo(increment());

export const incrementAsync = action$ =>
  action$.ofType(Actions.INCREMENT_ASYNC)
    .delayWhen(action => Rx.Observable.timer(action.delay))
    .mapTo(increment());
