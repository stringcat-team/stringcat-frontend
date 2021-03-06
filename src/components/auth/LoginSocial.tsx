import { Box, Typography, styled, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GITHUB_AUTH_KEY, GOOGLE_AUTH_KEY, KAKAO_AUTH_KEY } from "../../../pages/api/AuthService";
import { Oauth } from "../../@types/redux/reducers/auth.interface";
import { oauthLoginSuccess } from "../../redux/reducers/auth";

const StyledButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: 10,
  marginTop: theme.spacing(1),
  background: theme.palette.background.default,
  cursor: "pointer",
  display: "flex",
  color: theme.palette.text.primary,
  justifyContent: "flex-start",
  "&:hover": {
    background: theme.palette.primary.main,
  },
}));

const EmailButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginTop: theme.spacing(1),
  borderRadius: 18,
  "&:hover": {
    background: theme.palette.primary.main,
  },
}));

const OauthLogin: Oauth = {
  kakao: {
    text: "카카오톡으로 로그인 하기",
    authKey: KAKAO_AUTH_KEY,
    url: "https://kauth.kakao.com/oauth/authorize?client_id=",
  },
  google: {
    text: "구글로 로그인하기",
    authKey: GOOGLE_AUTH_KEY,
    url: "https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/analytics.readonly&client_id=",
  },
  github: {
    text: "Github으로 로그인하기",
    authKey: GITHUB_AUTH_KEY,
    url: "https://github.com/login/oauth/authorize?client_id=",
  },
};

const LoginSocial = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const onClickLogin = (type: string) => () => {
    localStorage.removeItem("type");
    localStorage.setItem("type", type);
    const { url, authKey } = OauthLogin[type];
    window.open(
      `${url}${authKey}&redirect_uri=${window.location.origin}/auth/callback&response_type=code`,
      "_blank",
      "width=500, height=700",
    );
  };

  useEffect(() => {
    window.addEventListener(
      "message",
      (e) => {
        if (e.origin === "http://localhost:3000" && e.data.login) {
          dispatch(oauthLoginSuccess(e.data));
          const { newMember } = e.data.login;
          if (!newMember) {
            router.push("/auth/signup");
          }
        }
      },
      false,
    );
  }, [router, dispatch]);

  useEffect(() => {
    router.prefetch("/auth/signup");
  }, [router]);

  return (
    <Box sx={{ flex: 1, paddingLeft: (theme) => theme.spacing(2) }}>
      {Object.keys(OauthLogin).map((key) => {
        const { text } = OauthLogin[key];
        return (
          <StyledButton onClick={onClickLogin(key)} key={key} fullWidth>
            <Image src={`/images/${key}_icon.png`} width={20} height={20} />
            <Typography variant="body1" sx={{ paddingLeft: (theme) => theme.spacing(1) }}>
              {text}
            </Typography>
          </StyledButton>
        );
      })}

      <Link passHref href="/auth/email">
        <EmailButton variant="text" fullWidth>
          E-mail로 가입하기
        </EmailButton>
      </Link>
    </Box>
  );
};

export default LoginSocial;
