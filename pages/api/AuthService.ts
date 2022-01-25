import { ServerResponse } from "http";
import axios, { AxiosResponse } from "axios";

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
  skills?: string;
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

  static SEND_MAIL = "mail/send/auth";

  static SIGN_UP = "auth/sign-up";

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
            data: {
              content: "테스트 이메일이 발송되었습니다 :)",
              email,
              title: "[stringcat] 회원가입을 위한 이메일 인증",
              type: "VERIFIER",
            },
          });
          resolve(response);
        } catch (e) {
          reject(e);
        }
      })();
    });
  }

  static signUp(form: SignUpForm) {
    return new Promise<AxiosResponse>((resolve, reject) => {
      (async () => {
        try {
          const response: AxiosResponse = await axios({
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
}

export default AuthService;