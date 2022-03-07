import { Box, Button, styled, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { LOADING_IMAGE } from "../../utils/const";
import Logo from "../Logo";
import LoginForm from "./LoginForm";
import LoginSocial from "./LoginSocial";

const StyledBox = styled(Box)(({ theme }) => ({
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  width: 700,
  height: 400,
  padding: theme.spacing(3),
  position: "relative",
}));

const Login = () => {
  const theme = useTheme();
  const { status } = useSelector((state: RootState) => state.auth);

  return (
    <StyledBox>
      <Logo />
      <Typography
        variant="body1"
        sx={{ textAlign: "center", paddingBottom: theme.spacing(3), paddingTop: theme.spacing(2) }}
      >
        개발자들을 위한 커뮤니티 stringcat
      </Typography>
      <Box display="flex" justifyContent="space-around" mb={1}>
        {status === "loading" ? (
          <Image src={LOADING_IMAGE} width={200} height={200} />
        ) : (
          <>
            <LoginForm />
            <LoginSocial />
          </>
        )}
      </Box>
    </StyledBox>
  );
};

export default Login;
