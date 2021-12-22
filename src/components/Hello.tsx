import { useTheme } from "@emotion/react";
import React from "react";
import Box from "./Box";

const Hello: React.FC = () => {
  const theme = useTheme();
  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
      <Box sx={{ padding: 8, borderRadius: 8, border: `2px solid ${theme.colors.primary}` }}>
        Hello it's String Cat!
      </Box>
    </Box>
  );
};

export default Hello;
