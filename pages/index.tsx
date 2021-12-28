import type { NextPage } from "next";
import Layout from "../src/components/Layout/Layout";
import Hello from "../src/components/Hello";

const Index: NextPage = () => {
  return (
    <Layout pageTitle="StringCat">
      <Hello />
    </Layout>
  );
};

export default Index;
