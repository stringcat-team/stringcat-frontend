import { OauthLoginReponse } from "../../../pages/api/AuthService";
import {
  AuthActionTypes,
  AuthState,
  AuthActions,
} from "../../@types/redux/reducers/auth.interface";

const { OAUTH_LOGIN_REQUEST, OAUTH_LOGIN_SUCCESS } = AuthActionTypes;

export const oauthLoginRequest = (code: string | string[]) => ({
  type: OAUTH_LOGIN_REQUEST,
  payload: { code },
});

export const oauthLoginSuccess = (response: OauthLoginReponse) => ({
  type: OAUTH_LOGIN_SUCCESS,
  payload: { response },
});

const initialState: AuthState = {
  accessToken: null,
  type: null,
};

const AuthReducer = (state = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case OAUTH_LOGIN_REQUEST:
      return {
        ...state,
      };
    case OAUTH_LOGIN_SUCCESS: {
      const { accessToken, type } = action.payload.response;
      return {
        ...state,
        accessToken,
        type,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
