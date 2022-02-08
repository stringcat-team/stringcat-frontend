import type { NextPage } from "next";
import Layout from "../src/components/Layout/Layout";

import OrderBox from "../src/components/floating/OrderBox";
import RankingBox from "../src/components/floating/RankingBox";
import FilterBox from "../src/components/floating/FilterBox";

const Index: NextPage = () => {
  return (
    <Layout pageTitle="StringCat">
      <RankingBox />
      <OrderBox />
      <FilterBox />
    </Layout>
  );
};

export default Index;
