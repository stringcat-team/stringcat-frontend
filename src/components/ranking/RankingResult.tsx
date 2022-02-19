import { Box, Typography } from "@mui/material";
import React from "react";
import RankingList from "./RankingList";

const RankingResult = () => {
  return (
    <Box>
      <Box mb={3}>
        <Typography variant="h4" sx={{ fontWeight: 400 }} mb={2}>
          유저 닉네임
        </Typography>
        <RankingList />
      </Box>

      <Box>
        <Typography variant="h4" sx={{ fontWeight: 400 }} mb={2}>
          기술 언어
        </Typography>
        <Typography>검색 결과가 없습니다</Typography>
      </Box>
    </Box>
  );
};

export default RankingResult;
