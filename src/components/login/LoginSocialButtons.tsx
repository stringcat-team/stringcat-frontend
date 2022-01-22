import { Box, Typography, styled, Button, useTheme, Theme } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { socialLoginRequest } from "../../redux/reducers/auth";

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

const KAKAO_URL = "https://kauth.kakao.com/oauth/authorize?client_id=";
const GITHUB_URL = "https://github.com/login/oauth/authorize?client_id=";

const SocialLogins = [
  {
    type: "kakao",
    text: "카카오톡으로 로그인 하기",
    key: `${process.env.NEXT_PUBLIC_TEST_KAKAO_AUTH_KEY}`,
  },
  {
    type: "google",
    text: "구글로 로그인하기",
    key: `${process.env.NEXT_PUBLIC_GOOGLE_AUTH_KEY}`,
  },
  {
    type: "github",
    text: "Github으로 로그인하기",
    key: `${process.env.NEXT_PUBLIC_GITHUB_AUTH_KEY}`,
  },
];

const LoginSocialButtons = () => {
  const dispatch = useDispatch();

  const onClickLogin = (type: string, key: string) => () => {
    dispatch(socialLoginRequest(type, key));
    localStorage.removeItem("type");
    localStorage.setItem("type", type);
  };

  return (
    <Box sx={{ flex: 1, paddingLeft: (theme) => theme.spacing(2) }}>
      {SocialLogins.map((login) => (
        <StyledButton onClick={onClickLogin(login.type, login.key)} key={login.type} fullWidth>
          <Image src={`/images/${login.type}_icon.png`} width={20} height={20} />
          <Typography variant="body2" sx={{ paddingLeft: (theme) => theme.spacing(1) }}>
            {login.text}
          </Typography>
        </StyledButton>
      ))}
    </Box>
  );
};

export default LoginSocialButtons;
