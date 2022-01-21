import { all, fork } from "@redux-saga/core/effects";
import AuthSaga from "./auth";
import configSaga from "./config";

export default function* rootSaga() {
  yield all([fork(configSaga), fork(AuthSaga)]);
}
