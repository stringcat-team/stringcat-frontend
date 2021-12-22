import type { NextPage } from "next";
import { useSelector } from "react-redux";
import { RootStateInterface } from "../src/interfaces/redux/rootState";
import { ConfigState } from "../src/interfaces/redux/reducers/config.interfaces";
import Layout from "../src/components/Layout/Layout";
import Hello from "../src/components/Hello";

const Index: NextPage = () => {
  const { mode } = useSelector((state: RootStateInterface): ConfigState => state.config);
  return (
    <Layout pageTitle="StringCat">
      <Hello />
    </Layout>
  );
};

export default Index;
