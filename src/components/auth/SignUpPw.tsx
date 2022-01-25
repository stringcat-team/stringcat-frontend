import { FormControl, FormHelperText, styled } from "@mui/material";
import React, { ChangeEventHandler, useState } from "react";
import Input from "../Input";

const StyledHelper = styled(FormHelperText)(({ theme }) => ({
  marginLeft: 2,
}));

const SignUpPw = () => {
  const [pw, setPw] = useState<string>("");
  const [pw2, setPw2] = useState<string>("");

  const onChangePw: ChangeEventHandler<HTMLInputElement> = ({ currentTarget: { value } }) => {
    setPw(value);
  };

  const onChangePw2: ChangeEventHandler<HTMLInputElement> = ({ currentTarget: { value } }) => {
    setPw2(value);
  };

  const error = pw !== pw2;

  return (
    <>
      <FormControl fullWidth required error={!error}>
        <Input
          onChange={onChangePw}
          value={pw}
          placeholder="비밀번호"
          fullWidth
          type="password"
          sx={{ mb: "5px" }}
        />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 1 }} error={error}>
        <Input value={pw2} onChange={onChangePw2} placeholder="비밀번호 2차" type="password" />
        <StyledHelper>{error ? "비밀번호가 불일치합니다." : "비밀번호가 일치합니다."}</StyledHelper>
      </FormControl>
    </>
  );
};

export default SignUpPw;
