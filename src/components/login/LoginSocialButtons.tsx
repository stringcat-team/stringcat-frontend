import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import Box from "../Box";
import Typo from "../Typo";

const StyledButton = styled("button")(({ theme }) => ({
  border: `1px solid ${theme.colors.divider}`,
  borderRadius: theme.shape.borderRadius,
  width: "100%",
  fontWeight: 500,
  padding: 10,
  marginTop: theme.spacing(1),
  background: theme.colors.background.default,
  cursor: "pointer",
  textAlign: "left",
  "&:first-child": {
    marginTop: theme.spacing(0.5),
  },
}));
const LoginSocialButtons = () => {
  const theme = useTheme();
  return (
    <Box sx={{ flex: 1, paddingLeft: theme.spacing(2) }}>
      <StyledButton>
        <Typo variant="body">카카오톡으로 로그인 하기</Typo>
      </StyledButton>
      <StyledButton>
        <Typo variant="body">구글로 로그인하기</Typo>
      </StyledButton>
      <StyledButton>
        <Typo variant="body">Github으로 로그인하기</Typo>
      </StyledButton>
    </Box>
  );
};

export default LoginSocialButtons;
