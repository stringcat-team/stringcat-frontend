import { Box, Typography, styled, Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { Oauth } from "../../@types/redux/reducers/auth.interface";

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

const OauthLogin: Oauth = {
  kakao: {
    text: "카카오톡으로 로그인 하기",
    authKey: `${process.env.NEXT_PUBLIC_TEST_KAKAO_AUTH_KEY}`,
    url: "https://kauth.kakao.com/oauth/authorize?client_id=",
  },
  google: {
    text: "구글로 로그인하기",
    authKey: `${process.env.NEXT_PUBLIC_GOOGLE_AUTH_KEY}`,
    url: "",
  },
  github: {
    text: "Github으로 로그인하기",
    authKey: `${process.env.NEXT_PUBLIC_GITHUB_AUTH_KEY}`,
    url: "https://github.com/login/oauth/authorize?client_id=",
  },
};

const LoginSocialButtons = () => {
  const onClickLogin = (type: string) => () => {
    const { url, authKey } = OauthLogin[type];
    window.open(
      `${url}${authKey}&redirect_uri=http://localhost:3000/auth/callback&response_type=code`,
      "_blank",
      "width=500, height=700",
    );
    localStorage.removeItem("type");
    localStorage.setItem("type", type);
  };

  return (
    <Box sx={{ flex: 1, paddingLeft: (theme) => theme.spacing(2) }}>
      {Object.keys(OauthLogin).map((key) => {
        const { text } = OauthLogin[key];
        return (
          <StyledButton onClick={onClickLogin(key)} key={key} fullWidth>
            <Image src={`/images/${key}_icon.png`} width={20} height={20} />
            <Typography variant="body2" sx={{ paddingLeft: (theme) => theme.spacing(1) }}>
              {text}
            </Typography>
          </StyledButton>
        );
      })}
    </Box>
  );
};

export default LoginSocialButtons;
