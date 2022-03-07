import { put, all, fork, takeLatest, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import {
  AuthActionTypes,
  OauthLoginRequest,
  SendEmailRequest,
  SignUpRequest,
  VerifyEmailCodeRequest,
} from "../../@types/redux/reducers/auth.interface";
import AuthService, { OauthLoginReponse, SignUpResponse } from "../../../pages/api/AuthService";
import {
  authError,
  oauthLoginSuccess,
  sendEmailSuccess,
  signUpSuccess,
  verifyEmailCodeSuccess,
} from "../reducers/auth";

const { OAUTH_LOGIN_REQUEST, SEND_EMAIL_REQUEST, VERIFY_EMAIL_CODE_REQUEST, SIGN_UP_REQUEST } =
  AuthActionTypes;

function* oauthLoginRequest({ payload }: OauthLoginRequest) {
  try {
    const { code } = payload;
    const type = localStorage.getItem("type");

    let response: OauthLoginReponse;

    switch (type) {
      case "kakao": {
        response = yield call(AuthService.getKakaoToken, code);
        break;
      }
      case "github": {
        response = yield call(AuthService.getGithubToken, code);
        break;
      }
      case "google": {
        response = yield call(AuthService.getGoogleToken, code);
        break;
      }
      default:
        throw new Error("unknown login");
    }

    window.opener.postMessage({ login: true, ...response, type });
    localStorage.removeItem("type");
    window.close();
  } catch (error) {
    yield console.log(error);
  }
}

function* sendEmailRequest({ payload }: SendEmailRequest) {
  const { email } = payload;
  try {
    const response: AxiosResponse = yield call(AuthService.emailVerify, email);
    if (response.status === 200) {
      yield put(sendEmailSuccess(email));
    } else {
      throw new Error("Email Verifier Error");
    }
  } catch (error) {
    yield put(authError());
  }
}

function* verifyEmailCodeRequest({ payload }: VerifyEmailCodeRequest) {
  try {
    const { request, router } = payload;
    const response: AxiosResponse = yield call(AuthService.verifyCode, request);
    if (response.status === 200) {
      yield put(verifyEmailCodeSuccess());
      router.push("/auth/signup");
    } else {
      throw new Error("Email Code Error");
    }
  } catch (error) {
    yield put(authError());
  }
}

function* signUpRequest({ payload }: SignUpRequest) {
  try {
    const { request, router } = payload;
    const response: SignUpResponse = yield call(AuthService.signUp, request);
    if (response.data?.accessToken) {
      yield put(signUpSuccess(response.data.accessToken));
      router.push("/");
      return;
    }
    if (response.code === "CF01") {
      throw new Error("이미 존재하는 이메일입니다.");
    }
  } catch (error) {
    yield put(authError());
  }
}

function* oauthRefreshTokenRequestWatcher() {
  yield takeLatest(OAUTH_LOGIN_REQUEST, oauthLoginRequest);
}

function* sendEmailRequestWatcher() {
  yield takeLatest(SEND_EMAIL_REQUEST, sendEmailRequest);
}

function* verifyEmailCodeRequestWatcher() {
  yield takeLatest(VERIFY_EMAIL_CODE_REQUEST, verifyEmailCodeRequest);
}

function* signUpRequestWatcher() {
  yield takeLatest(SIGN_UP_REQUEST, signUpRequest);
}

export default function* AuthSaga() {
  yield all([
    fork(oauthRefreshTokenRequestWatcher),
    fork(sendEmailRequestWatcher),
    fork(verifyEmailCodeRequestWatcher),
    fork(signUpRequestWatcher),
  ]);
}
