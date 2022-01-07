import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import Box from "../Box";
import Button from "../Button";
import Typo from "../Typo";
import LoginForm from "./LoginForm";
import LoginSocialButtons from "./LoginSocialButtons";

const StyldButton = styled("button")(({ theme }) => ({
  background: theme.colors.background.default,
  border: "none",
  cursor: "pointer",
  fontFamily: theme.typo.fontFamily,
  fontSize: theme.typo.body.fontSize,
}));

interface LoginMainProps {
  onSignUp: () => void;
}

const LoginMain = ({ onSignUp }: LoginMainProps) => {
  const theme = useTheme();
  const onClickEmail = () => {
    onSignUp();
  };
  return (
    <>
      <Typo
        variant="body"
        sx={{ textAlign: "center", paddingBottom: theme.spacing(3), paddingTop: theme.spacing(2) }}
      >
        개발자들을 위한 커뮤니티 stringcat
      </Typo>
      <Box display="flex" justifyContent="space-around" sx={{ marginBottom: theme.spacing(1) }}>
        <LoginForm />
        <LoginSocialButtons />
      </Box>
      <Box display="flex" justifyContent="space-around">
        <Box
          sx={{ flex: 1, paddingRight: theme.spacing(2) }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typo variant="body2" sx={{ color: theme.colors.text.secondary }}>
            비밀번호를 잊으셨나요?
          </Typo>
          <Button>로그인 하기</Button>
        </Box>
        <Box
          sx={{
            flex: 1,
            paddingLeft: theme.spacing(2),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StyldButton onClick={onClickEmail}>E-mail로 가입하기</StyldButton>
        </Box>
      </Box>
    </>
  );
};

export default LoginMain;
