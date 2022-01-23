import { Box, Typography, Button, styled, useTheme } from "@mui/material";
import React from "react";
import LoginForm from "./LoginForm";
import LoginSocial from "./LoginSocial";

interface LoginMainProps {
  onSignUp: () => void;
}

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  borderRadius: 18,
  "&:hover": {
    background: theme.palette.primary.main,
  },
}));

const LoginMain = ({ onSignUp }: LoginMainProps) => {
  const theme = useTheme();
  const onClickEmail = () => {
    onSignUp();
  };
  return (
    <>
      <Typography
        variant="body1"
        sx={{ textAlign: "center", paddingBottom: theme.spacing(3), paddingTop: theme.spacing(2) }}
      >
        개발자들을 위한 커뮤니티 stringcat
      </Typography>
      <Box display="flex" justifyContent="space-around" mb={1}>
        <LoginForm />
        <LoginSocial />
      </Box>
      <Box display="flex" justifyContent="space-around">
        <Box flex={1} pr={1} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">비밀번호를 잊으셨나요?</Typography>
          <Button variant="contained" disableElevation>
            로그인 하기
          </Button>
        </Box>
        <Box flex={1} pl={2} display="flex" justifyContent="center" alignItems="center">
          <StyledButton onClick={onClickEmail} variant="text" fullWidth>
            E-mail로 가입하기
          </StyledButton>
        </Box>
      </Box>
    </>
  );
};

export default LoginMain;
