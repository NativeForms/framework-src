import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

// app
import {
  reducers as appReducers,
  epics as appEpics,
} from './App';
import {
  reducers as frameworkReducers,
  epics as frameworkEpics,
} from './Framework';

export const rootEpic = combineEpics(...Object.values(Object.assign({},
  appEpics,
  frameworkEpics,
)));

const reducers = combineReducers(Object.assign({},
  appReducers,
  frameworkReducers,
));

export default function (state, action) {
  return reducers(state, action);
}

