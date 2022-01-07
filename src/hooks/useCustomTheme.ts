export default function useCustomTheme<T>() {
  const theme = {
    mode: "light",
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    colors: {
      primary: "hotpink",
    },
    shape: {
      borderRadius: 8,
    },
    typo: {
      h1: {
        fontSize: "14px",
      },
      body: {
        fontSize: "12px",
      },
    },
  };

  return { theme };
}
