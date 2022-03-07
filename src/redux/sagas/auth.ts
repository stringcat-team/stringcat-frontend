import { put, all, fork, takeLatest, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import {
  AuthActionTypes,
  OauthLoginRequest,
  SendEmailRequest,
} from "../../@types/redux/reducers/auth.interface";
import AuthService, { OauthLoginReponse } from "../../../pages/api/AuthService";
import { authError, oauthLoginSuccess, sendEmailSuccess } from "../reducers/auth";

const { OAUTH_LOGIN_REQUEST, SEND_EMAIL_REQUEST } = AuthActionTypes;

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

function* oauthRefreshTokenRequestWatcher() {
  yield takeLatest(OAUTH_LOGIN_REQUEST, oauthLoginRequest);
}

function* sendEmailRequestWatcher() {
  yield takeLatest(SEND_EMAIL_REQUEST, sendEmailRequest);
}

export default function* AuthSaga() {
  yield all([fork(oauthRefreshTokenRequestWatcher), fork(sendEmailRequestWatcher)]);
}
