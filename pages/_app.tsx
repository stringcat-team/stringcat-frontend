import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import useCustomTheme from "../src/hooks/useCustomTheme";

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useCustomTheme();

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
