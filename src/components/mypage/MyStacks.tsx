import { Card, CardHeader, Divider, Paper, Typography } from "@mui/material";
import React from "react";

const MyStacks = () => {
  return (
    <Paper elevation={0} sx={{ p: 1, mb: 1 }}>
      <Typography variant="body1" mb={1}>
        나의 기술 스택
      </Typography>
      <Divider />
      <Typography variant="body1" mt={1}>
        java, python
      </Typography>
    </Paper>
  );
};

export default MyStacks;
