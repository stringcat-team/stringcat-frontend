import { Box, Button, styled, TextField } from "@mui/material";
import React from "react";

const EmailVerifier = () => {
  return (
    <Box
      sx={{
        width: 300,
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <TextField placeholder="이메일을 입력해주세요" size="small" fullWidth sx={{ mb: 1 }} />
      <Button variant="contained">인증하기</Button>
    </Box>
  );
};

export default EmailVerifier;
