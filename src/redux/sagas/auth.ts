import { all, fork, takeLatest } from "@redux-saga/core/effects";
import { AuthActionTypes, KakaoLoginRequest } from "../../@types/redux/reducers/auth.interface";

function* kakaoLoginRequest({ payload }: KakaoLoginRequest) {
  try {
    const { accessToken } = payload;
    yield console.log(accessToken);
  } catch (error) {
    yield;
  }
}

function* kakaoLoginRequestWatcher() {
  yield takeLatest(AuthActionTypes.KAKAO_LOGIN_REQUEST, kakaoLoginRequest);
}

export default function* AuthSaga() {
  yield all([fork(kakaoLoginRequestWatcher)]);
}
