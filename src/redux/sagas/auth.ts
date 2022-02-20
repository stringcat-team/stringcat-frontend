import { put, all, fork, takeLatest, call } from "redux-saga/effects";
import { AuthActionTypes, OauthLoginRequest } from "../../@types/redux/reducers/auth.interface";
import AuthService, { OauthLoginReponse } from "../../../pages/api/AuthService";
import { oauthLoginSuccess } from "../reducers/auth";

const { OAUTH_LOGIN_REQUEST } = AuthActionTypes;

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

function* oauthRefreshTokenRequestWatcher() {
  yield takeLatest(OAUTH_LOGIN_REQUEST, oauthLoginRequest);
}

export default function* AuthSaga() {
  yield all([fork(oauthRefreshTokenRequestWatcher)]);
}
