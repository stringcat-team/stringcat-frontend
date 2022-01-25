import { Box, Button, styled, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import React from "react";
import Logo from "../Logo";
import LoginForm from "./LoginForm";
import LoginSocial from "./LoginSocial";

const StyledBox = styled(Box)(({ theme }) => ({
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  width: 700,
  height: 400,
  padding: theme.spacing(3),
  position: "relative",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  borderRadius: 18,
  "&:hover": {
    background: theme.palette.primary.main,
  },
}));

const Login = () => {
  const theme = useTheme();

  return (
    <StyledBox>
      <Logo />
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
          <Link passHref href="/auth/email">
            <StyledButton variant="text" fullWidth>
              E-mail로 가입하기
            </StyledButton>
          </Link>
        </Box>
      </Box>
    </StyledBox>
  );
};

export default Login;
