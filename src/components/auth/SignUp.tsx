import { Box, Button, styled, TextField } from "@mui/material";
import React from "react";
import Input from "../Input";
import Logo from "../Logo";

const StyledBox = styled(Box)(({ theme }) => ({
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  width: 360,
  height: 760,
  padding: theme.spacing(3),
  position: "relative",
}));

const SignUp = () => {
  return (
    <StyledBox>
      <Logo />
      <form>
        <Input placeholder="아이디" fullWidth disabled value="knsan189@naver.com" type="email" />
        <Input placeholder="닉네임" fullWidth disabled value="줄고양이" />
        <Input placeholder="비밀번호" fullWidth disabled value="줄고양이" type="password" />
        <Input placeholder="비밀번호 2차" fullWidth disabled value="줄고양이" type="password" />
        <Input placeholder="자신을 한줄로 소개 해주세요." fullWidth />
        <Input placeholder="Github URL를 입력해주세요." fullWidth />

        <Box>
          <Button>그만두기</Button>
          <Button variant="contained">회원가입</Button>
        </Box>
      </form>
    </StyledBox>
  );
};

export default SignUp;
