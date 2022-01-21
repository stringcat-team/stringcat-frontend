import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const CallbackPage: NextPage = () => {
  const { query } = useRouter();

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
    if (query.code) getToken(query.code);
  }, [query]);

  return <div>a</div>;
};

export default CallbackPage;
