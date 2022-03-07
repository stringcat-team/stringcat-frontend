import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";
import wrapper from "../src/redux/store/wrapper";
import useCustomTheme from "../src/hooks/useCustomTheme";
import SnackBar from "../src/components/SnackBar";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { theme } = useCustomTheme();

  const CustomSnackbar = React.useCallback((key, message) => {
    return <SnackBar id={key} message={message} />;
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={1}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          content={CustomSnackbar}
        >
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </SnackbarProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

MyApp.defaultProps = {
  emotionCache: undefined,
};

export default wrapper.withRedux(MyApp);
