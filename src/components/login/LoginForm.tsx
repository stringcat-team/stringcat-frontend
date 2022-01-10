import { Typography, styled, useTheme, Divider, TextField, InputBase } from "@mui/material";
import React from "react";

const StyledInput = styled(InputBase)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  height: 44,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

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
        <StyledInput placeholder="ID" fullWidth sx={{ mb: 1 }} />
        <StyledInput placeholder="PASSWORD" fullWidth />
      </form>
    </StyledBox>
  );
};

export default LoginForm;
