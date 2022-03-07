import { Box, styled } from "@mui/material";
import React from "react";
import Logo from "../Logo";
import EmailVerifier from "./EmailVerifier";

const StyledBox = styled(Box)(({ theme }) => ({
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  width: 700,
  height: 400,
  padding: theme.spacing(3),
  position: "relative",
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
}));

const Email = () => {
  return (
    <StyledBox>
      <Logo email />
      <EmailVerifier />
    </StyledBox>
  );
};

export default Email;
