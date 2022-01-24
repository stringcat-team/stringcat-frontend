import { Box } from "@mui/material";
import { NextPage } from "next";
import React from "react";
import SignUp from "../../src/components/auth/SignUp";

const SignUpPage: NextPage = () => {
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
      <SignUp />
    </Box>
  );
};

export default SignUpPage;
