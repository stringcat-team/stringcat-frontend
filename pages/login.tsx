import styled from "@emotion/styled";
import { NextPage } from "next";
import React from "react";
import Login from "../src/components/login/Login";

const Container = styled("div")(() => ({
  height: "100vh",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const LoginPage: NextPage = () => {
  return (
    <Container>
      <Login />
    </Container>
  );
};

export default LoginPage;
