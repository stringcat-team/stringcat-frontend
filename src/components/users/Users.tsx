import { Box, Button, Container, Paper } from "@mui/material";
import React from "react";
import SearchBar from "../questions/SearchBar";

const Users = () => {
  return (
    <Container>
      <Box display="flex" justifyContent="space-between">
        <Paper>
          <SearchBar />
        </Paper>
        <Paper>
          <Button>All</Button>
          <Button>Month</Button>
          <Button>Week</Button>
          <Button>Today</Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default Users;
