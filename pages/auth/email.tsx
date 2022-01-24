import { Box } from "@mui/material";
import { NextPage } from "next";
import React from "react";
import Email from "../../src/components/auth/Email";

const EmailPage: NextPage = () => {
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
      <Email />
    </Box>
  );
};

export default EmailPage;
