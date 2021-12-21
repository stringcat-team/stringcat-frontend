import React from "react";

export default function useCustomTheme<T>() {
  const theme = {
    colors: {
      primary: "hotpink",
    },
  };

  return { theme };
}
