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

  return (
    <Box sx={{ flex: 1, paddingLeft: theme.spacing(2) }}>
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

      <StyledButton fullWidth>
        <Image src="/images/github_icon.png" width={20} height={20} />
        <Typography variant="body2" sx={{ paddingLeft: theme.spacing(1) }}>
          Github으로 로그인하기
        </Typography>
      </StyledButton>
    </Box>
  );
};

export default LoginSocialButtons;
