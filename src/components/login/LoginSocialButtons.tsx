import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
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
  display: "flex",
  "&:first-child": {
    marginTop: theme.spacing(0.5),
  },
}));
const LoginSocialButtons = () => {
  const theme = useTheme();
  return (
    <Box sx={{ flex: 1, paddingLeft: theme.spacing(2) }}>
      <StyledButton>
        <Image src="/images/kakao_icon.png" width={20} height={20} />
        <Typo variant="body" sx={{ paddingLeft: theme.spacing(1) }}>
          카카오톡으로 로그인 하기
        </Typo>
      </StyledButton>
      <StyledButton>
        <Image src="/images/google_icon.png" width={20} height={20} />
        <Typo variant="body" sx={{ paddingLeft: theme.spacing(1) }}>
          구글로 로그인하기
        </Typo>
      </StyledButton>
      <StyledButton>
        <Image src="/images/github_icon.png" width={20} height={20} />
        <Typo variant="body" sx={{ paddingLeft: theme.spacing(1) }}>
          Github으로 로그인하기
        </Typo>
      </StyledButton>
    </Box>
  );
};

export default LoginSocialButtons;
