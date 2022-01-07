import styled from "@emotion/styled";
import React from "react";
import Box from "../Box";
import Button from "../Button";

const StyledInput = styled("input")(({ theme }) => ({
  border: `1px solid ${theme.colors.divider}`,
  height: 44,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
  marginBottom: theme.spacing(2),
  width: "100%",
}));
const EmailVerifier = () => {
  return (
    <Box
      sx={{
        width: 300,
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginBottom: -58,
      }}
    >
      <StyledInput placeholder="이메일을 입력해주세요" />
      <Button>인증하기</Button>
    </Box>
  );
};

export default EmailVerifier;
