import { Box } from "@mui/material";
import Head from "next/head";
import React, { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children?: ReactNode;
  pageTitle?: string;
}

function Layout({ children, pageTitle }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Box
        component="main"
        sx={{ background: (theme) => theme.palette.secondary.main, height: "100vh", pt: 8, pb: 3 }}
      >
        {children}
      </Box>
    </>
  );
}

Layout.defaultProps = {
  children: null,
  pageTitle: "",
};

export default Layout;
