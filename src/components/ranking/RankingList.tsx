import { Box, Grid } from "@mui/material";
import React from "react";
import { USER_LIST } from "../../utils/dummies";
import RankingItem from "./RankingItem";

const RankingList = () => {
  return (
    <Box>
      <Grid container spacing={1}>
        {USER_LIST.map((item) => (
          <Grid item key={item.id} md={2.4}>
            <RankingItem userInfo={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RankingList;
