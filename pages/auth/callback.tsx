import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { oauthLoginRequest } from "../../src/redux/reducers/auth";

const CallbackPage: NextPage = () => {
  const { query } = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (query.code) {
      const type = localStorage.getItem("type");
      dispatch(oauthLoginRequest(query.code, type));
    }
  }, [query, dispatch]);

  return <div>a</div>;
};

export default CallbackPage;
