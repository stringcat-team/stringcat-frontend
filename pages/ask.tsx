import { NextPage } from "next";
import React from "react";
import Layout from "../src/components/Layout/Layout";
import Ask from "../src/components/questions/ask/Ask";

const AskPage: NextPage = () => {
  return (
    <Layout>
      <Ask />
    </Layout>
  );
};

export default AskPage;
