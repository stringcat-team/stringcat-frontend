import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import Box from "../Box";
import Button from "../Button";
import Typo from "../Typo";

const StyledInput = styled("input")(({ theme }) => ({
  border: `1px solid ${theme.colors.divider}`,
  height: 44,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
  width: "100%",
  "&:first-child": {
    marginBottom: theme.spacing(1),
  },
}));

const StyledBox = styled("div")(({ theme }) => ({
  flex: 1,
  paddingRight: theme.spacing(2),
  borderRight: `1px solid ${theme.colors.divider}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
}));

const LoginForm = () => {
  const theme = useTheme();
  return (
    <StyledBox>
      <Typo
        sx={{
          borderBottom: `1px solid ${theme.colors.divider}`,
          marginBottom: theme.spacing(1),
          paddingBottom: 5,
        }}
      >
        로그인 하기
      </Typo>
      <form>
        <StyledInput placeholder="ID" />
        <StyledInput placeholder="PASSWORD" />
      </form>
    </StyledBox>
  );
};

export default LoginForm;
