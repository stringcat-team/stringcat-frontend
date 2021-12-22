import { all, fork } from '@redux-saga/core/effects';
import configSaga from './config';

export default function* rootSaga() {
  yield all([fork(configSaga)]);
}
