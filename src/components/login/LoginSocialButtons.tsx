import { Box, Typography, styled, Button, useTheme, Theme } from "@mui/material";
import Image from "next/image";
import React from "react";
import GoogleLogin, { GoogleLoginResponse } from "react-google-login";
import KakaoLogin from "react-kakao-login";

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

const LoginSocialButtons = () => {
  const theme = useTheme();
  const onSuccess = (response: any) => {
    console.log(response);
  };
  const onFailure = (response: any) => {
    console.log(response);
  };

  const onClickGithub = () => {
    window.open(
      `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_AUTH_KEY}`,
      "_blank",
      "width=500, height=700",
    );
  };

  const onClickKakao = () => {
    window.open(
      `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_AUTH_KEY}&redirect_uri=http://localhost:3000/auth/callback&response_type=code`,
      "_blank",
      "width=500, height=700",
    );
  };

  return (
    <Box sx={{ flex: 1, paddingLeft: theme.spacing(2) }}>
      <Button onClick={onClickKakao}>카카오 </Button>
      <KakaoLogin
        token={`${process.env.NEXT_PUBLIC_KAKAO_AUTH_KEY}`}
        onSuccess={onSuccess}
        onFail={onFailure}
        render={(params) => (
          <StyledButton {...params} fullWidth>
            <Image src="/images/kakao_icon.png" width={20} height={20} />
            <Typography variant="body2" sx={{ paddingLeft: theme.spacing(1) }}>
              카카오톡으로 로그인 하기
            </Typography>
          </StyledButton>
        )}
      />
      <GoogleLogin
        onSuccess={onSuccess}
        onFailure={onFailure}
        clientId={`${process.env.NEXT_PUBLIC_GOOGLE_AUTH_KEY}`}
        render={(prop) => (
          <StyledButton fullWidth onClick={prop.onClick} disabled={prop.disabled}>
            <Image src="/images/google_icon.png" width={20} height={20} />
            <Typography variant="body2" sx={{ paddingLeft: theme.spacing(1) }}>
              구글로 로그인하기
            </Typography>
          </StyledButton>
        )}
      />

      <StyledButton fullWidth onClick={onClickGithub}>
        <Image src="/images/github_icon.png" width={20} height={20} />
        <Typography variant="body2" sx={{ paddingLeft: theme.spacing(1) }}>
          Github으로 로그인하기
        </Typography>
      </StyledButton>
    </Box>
  );
};

export default LoginSocialButtons;
