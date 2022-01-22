export enum AuthActionTypes {
  KAKAO_LOGIN_REQUEST = "KAKOA_LOGIN_REQUEST",
  KAKAO_LOGIN_SUCCESS = "KAKOA_LOGIN_SUCCESS",
  SOCIAL_LOGIN_REQUEST = "SOCIAL_LOGIN_REQUEST",
  OAUTH_REFRESH_TOKEN_REQUSET = "OAUTH_REFRESH_TOKEN_REQUSET",
  OAUTH_REFRESH_TOKEN_SUCCESS = "OAUTH_REFRESH_TOKEN_SUCCESS",
}

export type AuthActions =
  | KakaoLoginRequest
  | KakaoLoginSuccess
  | SocialLoginRequest
  | OauthRefreshTokenRequest
  | OauthRefreshTokenSuccess;

export type AuthState = {
  accessToken: string;
  refreshToken: string;
  type: string | null;
};

export interface KakaoLoginRequest {
  type: AuthActionTypes.KAKAO_LOGIN_REQUEST;
  payload: { accessToken: string };
}
export interface KakaoLoginSuccess {
  type: AuthActionTypes.KAKAO_LOGIN_SUCCESS;
  payload: { accessToken: string; refreshToken: string };
}

export interface SocialLoginRequest {
  type: AuthActionTypes.SOCIAL_LOGIN_REQUEST;
  payload: { type: string; key: string };
}

export interface OauthRefreshTokenRequest {
  type: AuthActionTypes.OAUTH_REFRESH_TOKEN_REQUSET;
  payload: { code: string | string[] };
}
export interface OauthRefreshTokenSuccess {
  type: AuthActionTypes.OAUTH_REFRESH_TOKEN_SUCCESS;
  payload: { accessToken: string; refreshToken: string };
}
