import { Box, styled } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import EmailVerifier from "./EmailVerifier";
import LoginMain from "./LoginMain";
import Logo from "./Logo";

interface BoxProps {
  email: boolean;
}

const StyledBox = styled(Box, { shouldForwardProp: (prop) => prop !== "email" })<BoxProps>(
  ({ theme, email }) => ({
    boxShadow: theme.shadows[3],
    borderRadius: theme.shape.borderRadius,
    width: 700,
    height: 400,
    padding: theme.spacing(3),
    position: "relative",
    ...(email && {
      height: 360,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }),
  }),
);

const Login = () => {
  const [email, setEmail] = useState<boolean>(false);
  const { accessToken, type } = useSelector((state: RootState) => state.auth);
  const onSignUp = useCallback(() => {
    setEmail(true);
  }, []);

  useEffect(() => {
    console.log(accessToken, type);
  }, [accessToken, type]);

  return (
    <StyledBox email={email}>
      <Logo email={email} />
      {!email ? <LoginMain onSignUp={onSignUp} /> : <EmailVerifier />}
    </StyledBox>
  );
};

export default Login;
