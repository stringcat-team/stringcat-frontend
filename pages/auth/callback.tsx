import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../src/redux/reducers";
import { oauthRefreshTokenRequest } from "../../src/redux/reducers/auth";

const CallbackPage: NextPage = () => {
  const { query } = useRouter();
  const dispatch = useDispatch();

  const getToken = async (code: string | string[]) => {
    const response = await axios({
      url: "https://github.com/login/oauth/access_token",
      params: {
        code,
        client_id: process.env.NEXT_PUBLIC_GITHUB_AUTH_KEY,
      },
    });

    console.log(response);
  };

  useEffect(() => {
    if (query.code) {
      const type = localStorage.getItem("type");
      dispatch(oauthRefreshTokenRequest(query.code, type));
    }
  }, [query, dispatch]);

  return <div>a</div>;
};

export default CallbackPage;
