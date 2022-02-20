import { NextPage } from "next";
import React from "react";
import Layout from "../src/components/Layout/Layout";
import Ranking from "../src/components/ranking/Ranking";

const RankingPage: NextPage = () => {
  return (
    <Layout pageTitle="유저 리스트">
      <Ranking />
    </Layout>
  );
};

export default RankingPage;
