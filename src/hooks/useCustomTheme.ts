import { createTheme } from "@mui/material";

export default function useCustomTheme() {
  const fontFamily = "Noto Sans KR, Roboto, Arial, sans-serif";
  const grid = 10;

  const theme = createTheme({
    palette: {
      primary: {
        main: "#F5BF41",
        contrastText: "#3F3F3F",
      },
      secondary: {
        main: "#F1F1F1",
        contrastText: "#3F3F3F",
      },
      text: {
        primary: "#3f3f3f",
        secondary: "#808183",
      },
    },
    typography: {
      fontFamily,
      subtitle1: {
        fontSize: "20px",
      },
      body1: {
        fontSize: "14px",
      },
      body2: {
        fontSize: "12px",
      },
    },
    spacing: grid,
    shape: {
      borderRadius: 5,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
          contained: {
            borderRadius: 18,
          },
          containedPrimary: {
            "&:hover": {
              background: "#F1F1F1",
            },
          },
        },
      },
    },
  });

  return { theme };
}
