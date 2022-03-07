import { OauthCallbackCode, OauthLoginReponse } from "../../../../pages/api/AuthService";

export enum AuthActionTypes {
  OAUTH_LOGIN_REQUEST = "OAUTH_LOGIN_REQUEST",
  OAUTH_LOGIN_SUCCESS = "OAUTH_LOGIN_SUCCESS",
  SEND_EMAIL_REQUEST = "SEND_EMAIL_REQUEST",
  SEND_EMAIL_SUCCESS = "SEND_EMAIL_SUCCESS",
  AUTH_ERROR = "AUTH_ERROR",
}

export type AuthActions =
  | OauthLoginRequest
  | OauthLoginSuccess
  | SendEmailRequest
  | SendEmailSuccess
  | AuthError;

export type AuthState = {
  accessToken: string | null;
  email?: string;
  status: "ok" | "loading" | "error";
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

export interface SendEmailRequest {
  type: AuthActionTypes.SEND_EMAIL_REQUEST;
  payload: { email: string };
}

export interface SendEmailSuccess {
  type: AuthActionTypes.SEND_EMAIL_SUCCESS;
  payload: { email: string };
}

export interface AuthError {
  type: AuthActionTypes.AUTH_ERROR;
  payload: {};
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
