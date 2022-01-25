import { OauthCallbackCode, OauthLoginReponse } from "../../../../pages/api/AuthService";

export enum AuthActionTypes {
  OAUTH_LOGIN_REQUEST = "OAUTH_LOGIN_REQUEST",
  OAUTH_LOGIN_SUCCESS = "OAUTH_LOGIN_SUCCESS",
}

export type AuthActions = OauthLoginRequest | OauthLoginSuccess;

export type AuthState = {
  accessToken: string | null;
  type: string | null;
};

export interface OauthLoginRequest {
  type: AuthActionTypes.OAUTH_LOGIN_REQUEST;
  payload: { code: OauthCallbackCode };
}
export interface OauthLoginSuccess {
  type: AuthActionTypes.OAUTH_LOGIN_SUCCESS;
  payload: { response: OauthLoginReponse; type: string };
}

export interface Oauth {
  [key: string]: AuthKey;
  kakao: AuthKey;
  google: AuthKey;
  github: AuthKey;
}

export interface AuthKey {
  text: string;
  authKey: string;
  url: string;
}
