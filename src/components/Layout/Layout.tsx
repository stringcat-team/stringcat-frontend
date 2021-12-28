import Head from "next/head";
import React, { ReactNode } from "react";

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
      {children}
    </>
  );
}

Layout.defaultProps = {
  children: null,
  pageTitle: "",
};

export default Layout;
