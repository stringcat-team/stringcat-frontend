import { NextRouter } from "next/router";
import {
  OauthLoginReponse,
  OauthCallbackCode,
  IVerfiyEmailCodeRequest,
  SignUpForm,
  AccessToken,
  LoginForm,
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
  SignUpRequest,
  SignUpSuccess,
  LoginRequest,
  LoginSuccess,
  Logout,
} from "../../@types/redux/reducers/auth.interface";

const {
  OAUTH_LOGIN_REQUEST,
  OAUTH_LOGIN_SUCCESS,
  SEND_EMAIL_REQUEST,
  SEND_EMAIL_SUCCESS,
  VERIFY_EMAIL_CODE_REQUEST,
  VERIFY_EMAIL_CODE_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
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

export const signUpRequest = (request: SignUpForm, router: NextRouter): SignUpRequest => ({
  type: SIGN_UP_REQUEST,
  payload: { request, router },
});

export const signUpSuccess = (accessToken: AccessToken): SignUpSuccess => ({
  type: SIGN_UP_SUCCESS,
  payload: { accessToken },
});

export const loginRequest = (form: LoginForm, router: NextRouter): LoginRequest => ({
  type: LOGIN_REQUEST,
  payload: { form, router },
});

export const loginSuccess = (accessToken: AccessToken): LoginSuccess => ({
  type: LOGIN_SUCCESS,
  payload: { accessToken },
});

export const logout = (): Logout => ({
  type: LOGOUT,
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
    case LOGIN_REQUEST:
    case SIGN_UP_REQUEST:
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
    case LOGIN_SUCCESS:
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        status: "ok",
        email: undefined,
        accessToken: action.payload.accessToken,
      };
    case LOGOUT: {
      return { ...initialState };
    }
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
