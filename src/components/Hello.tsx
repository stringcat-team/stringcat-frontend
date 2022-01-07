import { useTheme } from "@emotion/react";
import React, { useRef } from "react";
import Box from "./Box";
import Button from "./Button";
import Typo from "./Typo";

const Hello = () => {
  const theme = useTheme();
  const testRef = useRef<HTMLButtonElement>(null);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
      <Box sx={{ padding: 8, borderRadius: 8, border: `2px solid ${theme.colors.primary}` }}>
        <Typo variant="body"> Hello it's String Cat!</Typo>
      </Box>
      <Button ref={testRef} onClick={onClick} variant="disabled">
        테스트
      </Button>
    </Box>
  );
};

export default Hello;
