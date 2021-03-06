import { Box, CircularProgress } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../src/components/Logo";
import { oauthLoginRequest } from "../../src/redux/reducers/auth";
import { OauthCallbackCode } from "../api/AuthService";

const CallbackPage: NextPage = () => {
  const {
    query: { code },
  } = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (code) {
      localStorage.removeItem("code");
      localStorage.setItem("code", code as string);
      dispatch(oauthLoginRequest(code as OauthCallbackCode));
    }
  }, [code, dispatch]);

  useEffect(() => {}, []);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <CircularProgress size={80} sx={{ mb: 6 }} />
        <Logo />
      </Box>
    </Box>
  );
};

export default CallbackPage;
