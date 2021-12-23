import { useTheme } from "@emotion/react";
import React, { useRef } from "react";
import Box from "./Box";
import Button from "./Button";

const Hello = () => {
  const theme = useTheme();
  const testRef = useRef<HTMLButtonElement>(null);

  function onClick() {
    console.log(testRef.current);
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
      <Box sx={{ padding: 8, borderRadius: 8, border: `2px solid ${theme.colors.primary}` }}>
        Hello it's String Cat!
      </Box>
      <Button ref={testRef} onClick={onClick} sx={{ padding: 8 }}>
        테스트
      </Button>
    </Box>
  );
};

export default Hello;
