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
  });

  return { theme };
}
