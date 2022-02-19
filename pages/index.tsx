import type { NextPage } from "next";
import Layout from "../src/components/Layout/Layout";
import Home from "../src/components/Home";

const Index: NextPage = () => {
  return (
    <Layout pageTitle="StringCat">
      <Home />
    </Layout>
  );
};

export default Index;
