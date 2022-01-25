import { Box, styled } from "@mui/material";
import { NextPage } from "next";
import React from "react";
import Login from "../../src/components/auth/Login";

const LoginPage: NextPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Login />
    </Box>
  );
};

export default LoginPage;
