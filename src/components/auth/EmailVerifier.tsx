import { Box, Button, styled, TextField } from "@mui/material";
import React, { FormEventHandler, useRef } from "react";
import AuthService from "../../../pages/api/AuthService";

const EmailVerifier = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    try {
      event.preventDefault();
      if (inputRef.current) {
        const email = inputRef.current.value;
        const response = await AuthService.emailVerify(email);
        console.log(response);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <Box
        sx={{
          width: 300,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <TextField
          inputRef={inputRef}
          type="email"
          name="email"
          placeholder="이메일을 입력해주세요"
          size="small"
          fullWidth
          sx={{ mb: 1 }}
          required
        />
        <Button variant="contained" type="submit">
          인증하기
        </Button>
      </Box>
    </form>
  );
};

export default EmailVerifier;
