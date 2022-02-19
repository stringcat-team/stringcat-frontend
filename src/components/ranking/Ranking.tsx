import { Box, Button, Container, Paper, styled } from "@mui/material";
import React from "react";
import SearchBarInput from "../questions/SearchBarInput";
import RankingList from "./RankingList";

const StyledButton = styled(Button)(({ theme }) => ({
  minWidth: "auto",
}));

const RankingPage = () => {
  return (
    <Container sx={{ width: 890 }}>
      <Box display="flex" justifyContent="space-between">
        <Paper sx={{ flex: 1 }}>
          <SearchBarInput
            sx={{ height: "100%", border: "none" }}
            placeholder="기술 언어 또는 닉네임 검색"
          />
        </Paper>
        <Paper
          elevation={0}
          sx={{ ml: 2, width: 255, display: "flex", justifyContent: "space-evenly" }}
        >
          <StyledButton>All</StyledButton>
          <StyledButton>Month</StyledButton>
          <StyledButton>Week</StyledButton>
          <StyledButton>Today</StyledButton>
        </Paper>
      </Box>
      <RankingList />
    </Container>
  );
};

export default RankingPage;
