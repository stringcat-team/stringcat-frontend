import { OauthLoginReponse } from "../../../pages/api/AuthService";
import {
  AuthActionTypes,
  AuthState,
  AuthActions,
} from "../../@types/redux/reducers/auth.interface";

const { OAUTH_LOGIN_REQUEST, OAUTH_LOGIN_SUCCESS } = AuthActionTypes;

export const oauthLoginRequest = (code: string | string[], type: string | null) => ({
  type: OAUTH_LOGIN_REQUEST,
  payload: { code, type },
});

export const oauthLoginSuccess = (response: OauthLoginReponse | null) => ({
  type: OAUTH_LOGIN_SUCCESS,
  payload: {
    response,
  },
});

const initialState: AuthState = {
  accessToken: "",
  refreshToken: "",
  type: null,
};

const AuthReducer = (state = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case OAUTH_LOGIN_REQUEST:
      return {
        ...state,
      };

    case OAUTH_LOGIN_SUCCESS:
    default:
      return state;
  }
};

export default AuthReducer;
