import React from "react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { DM_Sans } from "next/font/google";
import Head from "next/head";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/code-highlight/styles.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "src/constants/globalStyle";
import { lightTheme } from "src/constants/theme";
import { Loading } from "src/layout/Loading";
import { supabase } from "src/lib/api/supabase";
import useUser from "src/store/useUser";

const dmSans = DM_Sans({
  subsets: ["latin-ext"],
});

const theme = createTheme({
  autoContrast: true,
  fontSmoothing: false,
  respectReducedMotion: true,
  cursorType: "pointer",
  fontFamily: dmSans.style.fontFamily,
  defaultGradient: {
    from: "#388cdb",
    to: "#0f037f",
    deg: 180,
  },
  primaryShade: 8,
  colors: {
    brightBlue: [
      "#e6f2ff",
      "#cee1ff",
      "#9bc0ff",
      "#649dff",
      "#3980fe",
      "#1d6dfe",
      "#0964ff",
      "#0054e4",
      "#004acc",
      "#003fb5",
    ],
  },
  radius: {
    lg: "12px",
  },
  components: {
    Button: {
      defaultProps: {
        fw: 500,
      },
    },
  },
});

const Toaster = dynamic(() => import("react-hot-toast").then(c => c.Toaster));

function JsonCrack({ Component, pageProps }: AppProps) {
  const setSession = useUser(state => state.setSession);

  React.useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) setSession(session);
    });
  }, [setSession]);

  return (
    <>
      <Head>
        <title>JSON Crack | Transform your data into interactive graphs</title>
      </Head>
      <ThemeProvider theme={lightTheme}>
        <Toaster
          position="bottom-right"
          containerStyle={{
            bottom: 34,
            right: 8,
            fontSize: 14,
          }}
          toastOptions={{
            style: {
              background: "#4D4D4D",
              color: "#B9BBBE",
              borderRadius: 4,
            },
          }}
        />
        <GlobalStyle />
        <MantineProvider defaultColorScheme="light" theme={theme}>
          <Loading />
          <Component {...pageProps} />
        </MantineProvider>
      </ThemeProvider>
    </>
  );
}

export default JsonCrack;
