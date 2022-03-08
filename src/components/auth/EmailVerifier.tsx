import { Box, Button, Grow, styled, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FormEventHandler, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthService from "../../../pages/api/AuthService";
import { RootState } from "../../redux/reducers";
import { sendEmailRequest, verifyEmailCodeRequest } from "../../redux/reducers/auth";
import { LOADING_IMAGE } from "../../utils/const";

const EmailVerifier = () => {
  const router = useRouter();
  const { status, email } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    if (!value) {
      return;
    }

    if (email) {
      const request = { email, code: value };
      dispatch(verifyEmailCodeRequest(request, router));
      return;
    }

    dispatch(sendEmailRequest(value));
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setValue(target.value);
  };

  useEffect(() => {
    router.prefetch("/auth/signup");
  }, [router]);

  const input = () => {
    if (status === "loading") {
      return <Image src={LOADING_IMAGE} height={240} width={240} />;
    }

    if (email) {
      return (
        <>
          <Typography variant="body1" pb={1}>
            이메일로 인증번호가 메일로 발송되었습니다!
          </Typography>
          <Typography variant="body1" pb={4}>
            메일이 안왔다면 스팸메일도 확인해주세요 :)
          </Typography>
          <TextField
            name="email"
            placeholder="인증번호"
            size="small"
            fullWidth
            sx={{ mb: 1 }}
            required
            onChange={onChange}
          />
          <Button variant="contained" type="submit">
            인증하기
          </Button>
        </>
      );
    }

    return (
      <>
        <TextField
          type="email"
          name="email"
          placeholder="이메일을 입력해주세요"
          size="small"
          fullWidth
          sx={{ mb: 1 }}
          required
          onChange={onChange}
        />
        <Button variant="contained" type="submit">
          인증하기
        </Button>
      </>
    );
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
        {input()}
      </Box>
    </form>
  );
};

export default EmailVerifier;
