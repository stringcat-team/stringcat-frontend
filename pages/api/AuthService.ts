import axios, { AxiosResponse } from "axios";

interface LoginResponse {}

class AuthService {
  static SERVER_ADDRESS = process.env.NEXT_PUBLIC_SERVER_ADDRESS;

  static KAKAO = "/auth/kakao";

  static REFRESH_TOKEN = "/auth/refresh";

  static getKaKoToken() {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const result: AxiosResponse = await axios({
            url: `${AuthService.SERVER_ADDRESS}/${AuthService.KAKAO}`,
            method: "GET",
          });
          resolve(result);
        } catch (e) {
          reject(e);
        }
      })();
    });
  }
}

export default AuthService;
