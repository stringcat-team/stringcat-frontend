import { SetTheme, ConfigActionTypes } from './../../interfaces/redux/reducers/config.interfaces';
import { all, call, fork, put, takeLatest } from '@redux-saga/core/effects';

function* setTheme({ payload }: SetTheme) {
  const {} = payload;
  try {
    yield;
  } catch (error) {
    yield;
  }
}

function* setThemeWatcher() {
  yield takeLatest(ConfigActionTypes.SET_THEME, setTheme);
}

export default function* configSaga() {
  yield all([fork(setThemeWatcher)]);
}
