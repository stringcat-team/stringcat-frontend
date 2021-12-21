import styled from "@emotion/styled";
import Head from "next/head";
import type { NextPage } from "next";

const StyledDiv = styled("div")(({ theme }) => ({
  background: "black",
  color: theme.colors.primary,
  display: "inline-block",
  padding: 8,
}));

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>String Cat</title>
      </Head>
      <main>
        <StyledDiv>Hello String Cat</StyledDiv>
      </main>
    </>
  );
};

export default Home;
