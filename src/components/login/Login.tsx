import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";
import EmailVerifier from "./EmailVerifier";
import LoginMain from "./LoginMain";
import Logo from "./Logo";

interface BoxProps {
  email: boolean;
}

const StyledBox = styled("div", { shouldForwardProp: (prop) => prop !== "email" })<BoxProps>(
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
  const onSignUp = useCallback(() => {
    setEmail(true);
  }, []);

  return (
    <StyledBox email={email}>
      <Logo email={email} />
      {!email ? <LoginMain onSignUp={onSignUp} /> : <EmailVerifier />}
    </StyledBox>
  );
};

export default Login;
