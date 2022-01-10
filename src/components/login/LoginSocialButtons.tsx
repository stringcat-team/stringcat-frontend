import { Box, Typography, styled, Button, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

const StyledButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: 10,
  marginTop: theme.spacing(1),
  background: theme.palette.background.default,
  cursor: "pointer",
  display: "flex",
  color: theme.palette.text.primary,
  justifyContent: "flex-start",
  "&:hover": {
    background: theme.palette.primary.main,
  },
}));
const LoginSocialButtons = () => {
  const theme = useTheme();
  return (
    <Box sx={{ flex: 1, paddingLeft: theme.spacing(2) }}>
      <StyledButton fullWidth>
        <Image src="/images/kakao_icon.png" width={20} height={20} />
        <Typography variant="body2" sx={{ paddingLeft: theme.spacing(1) }}>
          카카오톡으로 로그인 하기
        </Typography>
      </StyledButton>
      <StyledButton fullWidth>
        <Image src="/images/google_icon.png" width={20} height={20} />
        <Typography variant="body2" sx={{ paddingLeft: theme.spacing(1) }}>
          구글로 로그인하기
        </Typography>
      </StyledButton>
      <StyledButton fullWidth>
        <Image src="/images/github_icon.png" width={20} height={20} />
        <Typography variant="body2" sx={{ paddingLeft: theme.spacing(1) }}>
          Github으로 로그인하기
        </Typography>
      </StyledButton>
    </Box>
  );
};

export default LoginSocialButtons;
