import {
  AuthActionTypes,
  AuthState,
  AuthActions,
} from "../../@types/redux/reducers/auth.interface";

type OauthType = {
  [index: string]: string;
  kakao: string;
  github: string;
};

const {
  KAKAO_LOGIN_REQUEST,
  SOCIAL_LOGIN_REQUEST,
  OAUTH_REFRESH_TOKEN_REQUSET,
  OAUTH_REFRESH_TOKEN_SUCCESS,
} = AuthActionTypes;

const OAUTH_URLS: OauthType = {
  kakao: "https://kauth.kakao.com/oauth/authorize?client_id=",
  github: "https://github.com/login/oauth/authorize?client_id=",
};

export const kakaoLoginRequest = (accessToken: string) => ({
  type: KAKAO_LOGIN_REQUEST,
  payload: { accessToken },
});
export const kakaoLoginSuccess = () => ({ type: AuthActionTypes.KAKAO_LOGIN_SUCCESS, payload: {} });

export const socialLoginRequest = (type: string, key: string) => ({
  type: SOCIAL_LOGIN_REQUEST,
  payload: { type, key },
});

export const oauthRefreshTokenRequest = (code: string | string[], type: string | null) => ({
  type: OAUTH_REFRESH_TOKEN_REQUSET,
  payload: { code, type },
});
export const oauthRefreshTokenSuccess = () => ({ type: OAUTH_REFRESH_TOKEN_SUCCESS, payload: {} });

const initialState: AuthState = {
  accessToken: "",
  refreshToken: "",
  type: null,
};

const AuthReducer = (state = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case KAKAO_LOGIN_REQUEST:
      return {
        ...state,
      };
    case SOCIAL_LOGIN_REQUEST: {
      const { type, key } = action.payload;
      const url = `${OAUTH_URLS[type]}${key}&redirect_uri=http://localhost:3000/auth/callback&response_type=code`;
      window.open(url, "_blank", "width=500, height=700");
      return {
        ...state,
        type,
      };
    }
    case OAUTH_REFRESH_TOKEN_REQUSET:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default AuthReducer;
