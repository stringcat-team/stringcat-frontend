export enum AuthActionTypes {
  KAKAO_LOGIN_REQUEST = "KAKOA_LOGIN_REQUEST",
  KAKAO_LOGIN_SUCCESS = "KAKOA_LOGIN_SUCCESS",
}

export type AuthActions = KakaoLoginRequest | KakaoLoginSuccess;

export type AuthState = {
  accessToken: string;
  refreshToken: string;
};

export interface KakaoLoginRequest {
  type: AuthActionTypes.KAKAO_LOGIN_REQUEST;
  payload: { accessToken: string };
}
export interface KakaoLoginSuccess {
  type: AuthActionTypes.KAKAO_LOGIN_SUCCESS;
  payload: { accessToken: string; refreshToken: string };
}
