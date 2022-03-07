import type { NextPage } from "next";
import Layout from "../src/components/Layout/Layout";
import Home from "../src/components/Home";
import useNotifier from "../src/hooks/useNotifier";

const Index: NextPage = () => {
  useNotifier();
  return (
    <Layout pageTitle="StringCat">
      <Home />
    </Layout>
  );
};

export default Index;
