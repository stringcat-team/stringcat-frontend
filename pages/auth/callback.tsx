import { Box, CircularProgress } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../src/components/login/Logo";
import { oauthLoginRequest } from "../../src/redux/reducers/auth";

const CallbackPage: NextPage = () => {
  const { query } = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (query.code) {
      dispatch(oauthLoginRequest(query.code));
    }
  }, [query, dispatch]);

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
