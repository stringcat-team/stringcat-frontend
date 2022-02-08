import { NextPage } from "next";
import React from "react";
import Layout from "../src/components/Layout/Layout";
import MyPage from "../src/components/mypage/MyPage";

const MyPagePage: NextPage = () => {
  return (
    <Layout>
      <MyPage />
    </Layout>
  );
};

export default MyPagePage;
