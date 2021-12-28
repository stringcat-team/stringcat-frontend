import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ThemeProvider } from "@emotion/react";
import useCustomTheme from "../src/hooks/useCustomTheme";
import wrapper from "../src/redux/store/wrapper";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const { theme } = useCustomTheme();

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(MyApp);
