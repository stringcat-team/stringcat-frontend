import { Box, Button, FormControl, FormHelperText, styled, TextField } from "@mui/material";
import React, { FormEventHandler, useRef } from "react";
import Input from "../Input";
import Logo from "../Logo";
import SignUpPw from "./SignUpPw";

const StyledBox = styled(Box)(({ theme }) => ({
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  width: 360,
  height: 760,
  padding: theme.spacing(3),
  position: "relative",
}));

const StyledForm = styled("form")(({ theme }) => ({
  paddingTop: theme.spacing(7),
}));

const StyledHelper = styled(FormHelperText)(({ theme }) => ({
  marginLeft: 2,
}));

const SignUp = () => {
  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  return (
    <StyledBox>
      <Logo />
      <StyledForm onSubmit={onSubmit}>
        <TextField
          placeholder="아이디"
          value="knsan189@naver.com"
          type="email"
          helperText="인증이 완료된 이메일입니다."
          fullWidth
          inputProps={{ sx: { p: 1 } }}
        />
        <FormControl fullWidth sx={{ mb: 1 }} required>
          <Input placeholder="닉네임" fullWidth />
          <StyledHelper>중복되지 않는 닉네임입니다.</StyledHelper>
        </FormControl>
        <SignUpPw />
        <FormControl fullWidth sx={{ mb: 1 }}>
          <Input placeholder="자신을 한줄로 소개 해주세요." fullWidth />
        </FormControl>
        <Input placeholder="Github URL를 입력해주세요." fullWidth />

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            position: "absolute",
            left: 0,
            bottom: (theme) => theme.spacing(2),
            px: 3,
          }}
        >
          <Button>그만두기</Button>
          <Button variant="contained" type="submit">
            회원가입
          </Button>
        </Box>
      </StyledForm>
    </StyledBox>
  );
};

export default SignUp;
