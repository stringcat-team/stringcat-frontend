import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import Box from "../Box";
import Button from "../Button";
import Typo from "../Typo";
import LoginSocialButtons from "./LoginSocialButtons";

const Container = styled("div")(() => ({
  height: "100vh",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInput = styled("input")(({ theme }) => ({}));

const Login = () => {
  const theme = useTheme();
  return (
    <Container>
      <Box sx={{ boxShadow: theme.shadows[1], width: 700, height: 400 }}>
        <Typo>개발자들을 위한 커뮤니티 stringcat</Typo>

        <Box>
          <StyledInput placeholder="ID" />
          <StyledInput placeholder="PASSWORD" />
          <Button>로그인 하기</Button>
        </Box>
        <LoginSocialButtons />
      </Box>
    </Container>
  );
};

export default Login;
