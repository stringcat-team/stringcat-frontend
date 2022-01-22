import { ServerResponse } from "http";
import axios, { AxiosResponse } from "axios";

export interface OauthLoginReponse {
  accessToken?: string;
  refreshToken?: string;
}

export const KAKAO_KEY = process.env.NEXT_PUBLIC_TEST_KAKAO_AUTH_KEY;
export const GITHUB_KEY = process.env.NEXT_PUBLIC_GITHUB_AUTH_KEY;

class AuthService {
  static SERVER_ADDRESS = "/server/";

  static REFRESH_TOKEN = "/auth/refresh";

  static GITHUB = "/github/access_token";

  static SERVER_GITHUB = "/auth/github";

  static SERVER_KAKAO = "/auth/kakao";

  static checkRefreshToken(accessToken: string, url: string) {
    return new Promise<AxiosResponse>((resolve, reject) => {
      (async () => {
        try {
          const result: AxiosResponse = await axios({
            url: `${AuthService.SERVER_ADDRESS}/${url}`,
            method: "POST",
            data: { accessToken },
          });
          resolve(result);
        } catch (e) {
          reject(e);
        }
      })();
    });
  }

  static getGithubToken(code: string | string[]) {
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

          const response: AxiosResponse = await AuthService.checkRefreshToken(
            githubToken,
            AuthService.SERVER_KAKAO,
          );
          resolve(response.data.data);
        } catch (e) {
          reject(e);
        }
      })();
    });
  }

  static getKakaoToken(code: string | string[]) {
    return new Promise<OauthLoginReponse>((resolve, reject) => {
      (async () => {
        try {
          const { data }: AxiosResponse = await axios({
            url: `https://kauth.kakao.com/oauth/token`,
            method: "POST",
            params: {
              client_id: KAKAO_KEY,
              grant_type: "authorization_code",
              redirect_uri: "http://localhost:3000/auth/callback",
              code,
            },
          });

          const response: AxiosResponse = await AuthService.checkRefreshToken(
            data.access_token,
            AuthService.SERVER_GITHUB,
          );
          resolve(response.data.data);
        } catch (e) {
          reject(e);
        }
      })();
    });
  }
}

export default AuthService;
