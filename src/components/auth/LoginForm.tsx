import { Typography, styled, useTheme, Divider, Button, Box } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../redux/reducers/auth";
import Input from "../Input";

const StyledBox = styled("div")(({ theme }) => ({
  flex: 1,
  paddingRight: theme.spacing(2),
  borderRight: `1px solid ${theme.palette.divider}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
}));

const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const { email, password } = form;

  const onChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { value, name } = target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    dispatch(loginRequest(form, router));
  };

  return (
    <StyledBox>
      <Typography gutterBottom>로그인 하기</Typography>
      <Divider sx={{ mb: 1 }} />
      <form onSubmit={onSubmit}>
        <Input
          value={email}
          onChange={onChange}
          placeholder="ID"
          fullWidth
          sx={{ mb: 1 }}
          name="email"
          type="email"
          required
        />
        <Input
          value={password}
          onChange={onChange}
          placeholder="PASSWORD"
          fullWidth
          name="password"
          type="password"
          required
        />
        <Box flex={1} pt={1} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">비밀번호를 잊으셨나요?</Typography>
          <Button variant="contained" type="submit" disableElevation>
            로그인 하기
          </Button>
        </Box>
      </form>
    </StyledBox>
  );
};

export default LoginForm;
