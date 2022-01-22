export enum AuthActionTypes {
  OAUTH_LOGIN_REQUEST = "OAUTH_LOGIN_REQUEST",
  OAUTH_LOGIN_SUCCESS = "OAUTH_LOGIN_SUCCESS",
}

export type AuthActions = OauthLoginRequest | OauthLoginSuccess;

export type AuthState = {
  accessToken: string;
  refreshToken: string;
  type: string | null;
};

export interface OauthLoginRequest {
  type: AuthActionTypes.OAUTH_LOGIN_REQUEST;
  payload: { code: string | string[] };
}
export interface OauthLoginSuccess {
  type: AuthActionTypes.OAUTH_LOGIN_SUCCESS;
  payload: { accessToken: string; refreshToken: string };
}

export interface Oauth {
  [key: string]: AuthKey;
  kakao: AuthKey;
  github: AuthKey;
  google: AuthKey;
}

export interface AuthKey {
  text: string;
  authKey: string;
  url: string;
}
