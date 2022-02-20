import { Box, Button, Container, Paper, styled } from "@mui/material";
import React, { useState } from "react";
import SearchBarInput from "../questions/SearchBarInput";
import RankingList from "./RankingList";
import RankingResult from "./RankingResult";

const StyledButton = styled(Button)(({ theme }) => ({
  minWidth: "auto",
}));

const Ranking = () => {
  const [search, toggleSearch] = useState<boolean>(false);
  const onChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { value } = target;
    if (value.length > 0) {
      toggleSearch(true);
    } else {
      toggleSearch(false);
    }
  };

  return (
    <Container sx={{ width: 890 }} disableGutters>
      <Box display="flex" justifyContent="space-between" mb={3}>
        <Paper sx={{ flex: 1 }}>
          <SearchBarInput
            sx={{ height: "100%", border: "none" }}
            placeholder="기술 언어 또는 닉네임 검색"
            onChange={onChange}
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
      {search ? <RankingResult /> : <RankingList />}
    </Container>
  );
};

export default Ranking;
