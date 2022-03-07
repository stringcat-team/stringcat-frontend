import { NextRouter } from "next/router";
import {
  AccessToken,
  IVerfiyEmailCodeRequest,
  LoginForm,
  OauthCallbackCode,
  OauthLoginReponse,
  SignUpForm,
} from "../../../../pages/api/AuthService";

export enum AuthActionTypes {
  OAUTH_LOGIN_REQUEST = "OAUTH_LOGIN_REQUEST",
  OAUTH_LOGIN_SUCCESS = "OAUTH_LOGIN_SUCCESS",
  SEND_EMAIL_REQUEST = "SEND_EMAIL_REQUEST",
  SEND_EMAIL_SUCCESS = "SEND_EMAIL_SUCCESS",
  VERIFY_EMAIL_CODE_REQUEST = "VERIFY_EMAIL_CODE_REQUEST",
  VERIFY_EMAIL_CODE_SUCCESS = "VERIFY_EMAIL_CODE_SUCCESS",
  SIGN_UP_REQUEST = "SIGN_UP_REQUEST",
  SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS",
  LOGIN_REQUEST = "LOGIN_REQUEST",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  AUTH_ERROR = "AUTH_ERROR",
}

export type AuthActions =
  | OauthLoginRequest
  | OauthLoginSuccess
  | SendEmailRequest
  | SendEmailSuccess
  | VerifyEmailCodeRequest
  | VerifyEmailCodeSuccess
  | SignUpRequest
  | SignUpSuccess
  | LoginRequest
  | LoginSuccess
  | AuthError;

export type AuthState = {
  accessToken: AccessToken;
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

export interface VerifyEmailCodeRequest {
  type: AuthActionTypes.VERIFY_EMAIL_CODE_REQUEST;
  payload: { request: IVerfiyEmailCodeRequest; router: NextRouter };
}
export interface VerifyEmailCodeSuccess {
  type: AuthActionTypes.VERIFY_EMAIL_CODE_SUCCESS;
  payload: {};
}

export interface SignUpRequest {
  type: AuthActionTypes.SIGN_UP_REQUEST;
  payload: { request: SignUpForm; router: NextRouter };
}

export interface SignUpSuccess {
  type: AuthActionTypes.SIGN_UP_SUCCESS;
  payload: { accessToken: AccessToken };
}

export interface LoginRequest {
  type: AuthActionTypes.LOGIN_REQUEST;
  payload: { form: LoginForm; router: NextRouter };
}

export interface LoginSuccess {
  type: AuthActionTypes.LOGIN_SUCCESS;
  payload: { accessToken: AccessToken };
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
