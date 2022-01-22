import { all, fork, takeLatest } from "@redux-saga/core/effects";
import {
  AuthActionTypes,
  KakaoLoginRequest,
  OauthRefreshTokenRequest,
} from "../../@types/redux/reducers/auth.interface";

const { KAKAO_LOGIN_REQUEST, OAUTH_REFRESH_TOKEN_REQUSET } = AuthActionTypes;

function* kakaoLoginRequest({ payload }: KakaoLoginRequest) {
  try {
    const { accessToken } = payload;
    yield console.log(accessToken);
  } catch (error) {
    yield;
  }
}

function* oauthRefreshTokenRequest({ payload }: OauthRefreshTokenRequest) {
  try {
    console.log(payload);
    yield;
  } catch (error) {
    yield;
  }
}

function* kakaoLoginRequestWatcher() {
  yield takeLatest(AuthActionTypes.KAKAO_LOGIN_REQUEST, kakaoLoginRequest);
}

function* oauthRefreshTokenRequestWatcher() {
  yield takeLatest(OAUTH_REFRESH_TOKEN_REQUSET, oauthRefreshTokenRequest);
}

export default function* AuthSaga() {
  yield all([fork(kakaoLoginRequestWatcher), fork(oauthRefreshTokenRequestWatcher)]);
}
