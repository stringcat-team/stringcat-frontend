import { NextPage } from "next";
import React from "react";
import Layout from "../src/components/Layout/Layout";
import Users from "../src/components/users/Users";

const UsersPage: NextPage = () => {
  return (
    <Layout pageTitle="유저 리스트">
      <Users />
    </Layout>
  );
};

export default UsersPage;
