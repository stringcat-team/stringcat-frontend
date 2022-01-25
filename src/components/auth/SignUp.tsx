/* eslint-disable no-param-reassign */
import { Box, Button, styled } from "@mui/material";
import React, { ChangeEvent, FormEventHandler, useState } from "react";
import AuthService from "../../../pages/api/AuthService";
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

const ButtonBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  position: "absolute",
  left: 0,
  bottom: theme.spacing(2),
  padding: `0 ${theme.spacing(3)}`,
}));

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    nickname: "",
    password: "",
    password2: "",
    skills: "",
    intro: "",
    githubUrl: "",
  });

  const { email, nickname, password, password2, skills, intro, githubUrl } = form;

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    try {
      event.preventDefault();
      const response = AuthService.signUp(form);
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = ({ target: { value, name } }: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <StyledBox>
      <Logo />
      <form onSubmit={onSubmit} style={{ paddingTop: 70 }}>
        <Input
          fullWidth
          onChange={onChange}
          name="email"
          value={email}
          type="email"
          helperText="인증이 완료된 이메일입니다."
          placeholder="이메일"
          sx={{ mb: 1 }}
          required
        />
        <Input
          fullWidth
          onChange={onChange}
          name="nickname"
          value={nickname}
          helperText="사용가능한 닉네임 입니다."
          placeholder="닉네임"
          sx={{ mb: 1 }}
          required
        />
        <Input
          fullWidth
          onChange={onChange}
          name="password"
          value={password}
          type="password"
          placeholder="비밀번호 1차"
          error={password !== password2}
          sx={{ mb: "5px" }}
          required
        />
        <Input
          fullWidth
          onChange={onChange}
          name="password2"
          value={password2}
          type="password"
          helperText={
            password !== password2 ? "비밀번호가 불일치합니다." : "비밀번호가 일치합니다."
          }
          placeholder="비밀번호 2차"
          error={password !== password2}
          sx={{ mb: 1 }}
          required
        />
        <Input
          fullWidth
          onChange={onChange}
          name="intro"
          value={intro}
          placeholder="자신을 한줄로 소개 해주세요."
          sx={{ mb: 1 }}
        />
        <Input
          fullWidth
          onChange={onChange}
          name="githubUrl"
          value={githubUrl}
          placeholder="Github URL를 입력해주세요."
          type="url"
          sx={{ mb: 1 }}
        />
        <ButtonBox>
          <Button>그만두기</Button>
          <Button variant="contained" type="submit">
            회원가입
          </Button>
        </ButtonBox>
      </form>
    </StyledBox>
  );
};

export default SignUp;
