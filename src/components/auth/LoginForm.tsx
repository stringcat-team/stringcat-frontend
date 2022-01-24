import { Typography, styled, useTheme, Divider } from "@mui/material";
import React from "react";
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
  return (
    <StyledBox>
      <Typography gutterBottom>로그인 하기</Typography>
      <Divider sx={{ mb: 1 }} />
      <form>
        <Input placeholder="ID" fullWidth sx={{ mb: 1 }} />
        <Input placeholder="PASSWORD" fullWidth />
      </form>
    </StyledBox>
  );
};

export default LoginForm;
