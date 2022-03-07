import { ServerResponse } from "http";
import axios, { AxiosResponse } from "axios";

export type AccessToken = string | null;

export interface OauthLoginReponse {
  accessToken: string | null;
  newMember?: boolean;
  type: string | null;
}

export type OauthCallbackCode = string | undefined;

export interface SignUpForm {
  email: string;
  githubUrl?: string;
  intro?: string;
  nickname: string;
  password: string;
  password2: string;
  skills?: string[];
}

export interface SignUpResponse extends Partial<AxiosResponse> {
  code?: string;
  data?: {
    accessToken: AccessToken;
    isNewMember: boolean;
  };
}

export type LoginResponse = SignUpResponse;

export interface LoginForm {
  email: string;
  password: string;
}

export interface IVerfiyEmailCodeRequest {
  code: string;
  email: string;
}

export const KAKAO_AUTH_KEY = `${process.env.NEXT_PUBLIC_KAKAO_AUTH_KEY}`;
export const GITHUB_AUTH_KEY = `${process.env.NEXT_PUBLIC_GITHUB_AUTH_KEY}`;
export const GOOGLE_AUTH_KEY = `${process.env.NEXT_PUBLIC_GOOGLE_AUTH_KEY}`;
export const REDIRECT_URI = `http://localhost:3000/auth/callback`;

class AuthService {
  static GITHUB = "/github/access_token";

  static REFRESH_TOKEN = "auth/refresh";

  static SERVER_ADDRESS = process.env.NEXT_PUBLIC_SERVER_ADDRESS;

  static SERVER_GITHUB = "auth/github";

  static SERVER_KAKAO = "auth/kakao";

  static SERVER_GOOGLE = "auth/google";

  static SEND_MAIL = "auth/mail/send/verify";

  static VERIFY_CODE = "auth/mail/verify/email";

  static SIGN_UP = "auth/sign-up";

  static LOGIN = "auth/login";

  static checkRefreshToken(accessToken: string | string[], url: string) {
    return new Promise<OauthLoginReponse>((resolve, reject) => {
      (async () => {
        try {
          const result: AxiosResponse = await axios({
            url: `${AuthService.SERVER_ADDRESS}/${url}`,
            method: "POST",
            data: { accessToken },
          });
          resolve(result.data.data);
        } catch (e) {
          reject(e);
        }
      })();
    });
  }

  static getGithubToken(code: OauthCallbackCode) {
    return new Promise<OauthLoginReponse>((resolve, reject) => {
      (async () => {
        try {
          const { data }: AxiosResponse = await axios({
            url: `${AuthService.GITHUB}`,
            method: "POST",
            params: {
              client_id: process.env.NEXT_PUBLIC_GITHUB_AUTH_KEY,
              client_secret: process.env.NEXT_PUBLIC_GITHUB_SECRET_KEY,
              code,
            },
          });
          const githubToken = data.split("&")[0].replace("access_token=", "");
          console.log(githubToken);
          const response: OauthLoginReponse = await AuthService.checkRefreshToken(
            githubToken,
            AuthService.SERVER_GITHUB,
          );
          resolve(response);
        } catch (e) {
          reject(e);
        }
      })();
    });
  }

  static getKakaoToken(code: OauthCallbackCode) {
    return new Promise<OauthLoginReponse>((resolve, reject) => {
      (async () => {
        try {
          const { data }: AxiosResponse = await axios({
            url: `https://kauth.kakao.com/oauth/token`,
            method: "POST",
            params: {
              client_id: KAKAO_AUTH_KEY,
              grant_type: "authorization_code",
              redirect_uri: REDIRECT_URI,
              code,
            },
          });
          console.log(data);

          const response: OauthLoginReponse = await AuthService.checkRefreshToken(
            data.access_token,
            AuthService.SERVER_KAKAO,
          );
          resolve(response);
        } catch (e) {
          reject(e);
        }
      })();
    });
  }

  static getGoogleToken(code: OauthCallbackCode) {
    return new Promise<OauthLoginReponse>((resolve, reject) => {
      (async () => {
        try {
          const { data }: AxiosResponse = await axios({
            url: `https://www.googleapis.com/oauth2/v4/token`,
            method: "POST",
            params: {
              client_id: GOOGLE_AUTH_KEY,
              redirect_uri: REDIRECT_URI,
              client_secret: process.env.NEXT_PUBLIC_GOOGLE_SECRET_KEY,
              grant_type: "authorization_code",
              code,
            },
          });

          console.log(data);

          const response: OauthLoginReponse = await AuthService.checkRefreshToken(
            data.access_token,
            AuthService.SERVER_GOOGLE,
          );
          resolve(response);
        } catch (e) {
          reject(e);
        }
      })();
    });
  }

  static emailVerify(email: string) {
    return new Promise<AxiosResponse>((resolve, reject) => {
      (async () => {
        try {
          const response: AxiosResponse = await axios({
            url: `${AuthService.SERVER_ADDRESS}/${AuthService.SEND_MAIL}`,
            method: "POST",
            data: `${email}`,
            headers: {
              "Content-type": "application/json",
            },
            params: { type: "VERIFIER" },
          });
          resolve(response);
        } catch (e) {
          reject(e);
        }
      })();
    });
  }

  static verifyCode(request: IVerfiyEmailCodeRequest) {
    return new Promise<AxiosResponse>((resolve, reject) => {
      (async () => {
        try {
          const response: AxiosResponse = await axios({
            url: `${AuthService.SERVER_ADDRESS}/${AuthService.VERIFY_CODE}`,
            method: "POST",
            data: { ...request, type: "VERIFIER" },
          });
          resolve(response);
        } catch (e) {
          reject(e);
        }
      })();
    });
  }

  static signUp(form: SignUpForm) {
    return new Promise<SignUpResponse>((resolve, reject) => {
      (async () => {
        try {
          const response: SignUpResponse = await axios({
            url: `${AuthService.SERVER_ADDRESS}/${AuthService.SIGN_UP}`,
            method: "POST",
            data: { ...form },
          });
          resolve(response);
        } catch (e) {
          reject(e);
        }
      })();
    });
  }

  static login(form: LoginForm) {
    return new Promise<LoginResponse>((resolve, reject) => {
      (async () => {
        try {
          const response: LoginResponse = await axios({
            url: `${AuthService.SERVER_ADDRESS}/${AuthService.LOGIN}`,
            method: "POST",
            data: { ...form },
          });
          resolve(response);
        } catch (e) {
          reject(e);
        }
      })();
    });
  }
}

export default AuthService;
