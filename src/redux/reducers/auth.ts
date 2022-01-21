import {
  AuthActionTypes,
  AuthState,
  AuthActions,
} from "../../@types/redux/reducers/auth.interface";

export const kakaoLoginRequest = (accessToken: string) => ({
  type: AuthActionTypes.KAKAO_LOGIN_REQUEST,
  payload: { accessToken },
});
export const kakaoLoginSuccess = () => ({ type: AuthActionTypes.KAKAO_LOGIN_SUCCESS, payload: {} });

const initialState: AuthState = {
  accessToken: "",
  refreshToken: "",
};

const AuthReducer = (state = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case AuthActionTypes.KAKAO_LOGIN_REQUEST:
      return {
        ...state,
      };
    default:
      return state;
  }
};
