import { NextRouter } from "next/router";
import {
  OauthLoginReponse,
  OauthCallbackCode,
  IVerfiyEmailCodeRequest,
} from "../../../pages/api/AuthService";
import {
  AuthActionTypes,
  AuthState,
  AuthActions,
  SendEmailRequest,
  SendEmailSuccess,
  AuthError,
  VerifyEmailCodeRequest,
  VerifyEmailCodeSuccess,
} from "../../@types/redux/reducers/auth.interface";

const {
  OAUTH_LOGIN_REQUEST,
  OAUTH_LOGIN_SUCCESS,
  SEND_EMAIL_REQUEST,
  SEND_EMAIL_SUCCESS,
  VERIFY_EMAIL_CODE_REQUEST,
  VERIFY_EMAIL_CODE_SUCCESS,
  AUTH_ERROR,
} = AuthActionTypes;

export const oauthLoginRequest = (code: OauthCallbackCode) => ({
  type: OAUTH_LOGIN_REQUEST,
  payload: { code },
});

export const oauthLoginSuccess = (response: OauthLoginReponse) => ({
  type: OAUTH_LOGIN_SUCCESS,
  payload: { response },
});

export const sendEmailRequest = (email: string): SendEmailRequest => ({
  type: SEND_EMAIL_REQUEST,
  payload: { email },
});

export const sendEmailSuccess = (email: string): SendEmailSuccess => ({
  type: SEND_EMAIL_SUCCESS,
  payload: { email },
});

export const verifyEmailCodeRequest = (
  request: IVerfiyEmailCodeRequest,
  router: NextRouter,
): VerifyEmailCodeRequest => ({
  type: VERIFY_EMAIL_CODE_REQUEST,
  payload: { request, router },
});

export const verifyEmailCodeSuccess = (): VerifyEmailCodeSuccess => ({
  type: VERIFY_EMAIL_CODE_SUCCESS,
  payload: {},
});

export const authError = (): AuthError => ({
  type: AUTH_ERROR,
  payload: {},
});

const initialState: AuthState = {
  accessToken: null,
  email: undefined,
  status: "ok",
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
    case SEND_EMAIL_REQUEST:
      return {
        ...state,
        status: "loading",
      };
    case SEND_EMAIL_SUCCESS:
      return {
        ...state,
        status: "ok",
        email: action.payload.email,
      };
    case VERIFY_EMAIL_CODE_REQUEST:
      return {
        ...state,
        status: "loading",
      };
    case VERIFY_EMAIL_CODE_SUCCESS:
      return {
        ...state,
        status: "ok",
      };
    case AUTH_ERROR:
      return {
        ...state,
        status: "error",
      };
    default:
      return state;
  }
};

export default AuthReducer;
