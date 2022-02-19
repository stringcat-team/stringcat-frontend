import { Box, Grid } from "@mui/material";
import React from "react";
import { UserInfo } from "../../@types/redux/reducers/user.interface";
import RankingItem from "./RankingItem";

const UserList = [
  {
    nickname: "stringcat",
    imageUrl: "/images/profile.png",
    score: 1110,
    id: 3030,
  },
  {
    nickname: "stringcat",
    imageUrl: "/images/profile.png",
    score: 1110,
    id: 3031,
  },
  {
    nickname: "stringcat",
    imageUrl: "/images/profile.png",
    score: 1110,
    id: 3032,
  },
  {
    nickname: "stringcat",
    imageUrl: "/images/profile.png",
    score: 1110,
    id: 3033,
  },
  {
    nickname: "stringcat",
    imageUrl: "/images/profile.png",
    score: 1110,
    id: 3034,
  },
  {
    nickname: "stringcat",
    imageUrl: "/images/profile.png",
    score: 1110,
    id: 3035,
  },
  {
    nickname: "stringcat",
    imageUrl: "/images/profile.png",
    score: 1110,
    id: 3036,
  },
  {
    nickname: "stringcat",
    imageUrl: "/images/profile.png",
    score: 1110,
    id: 3037,
  },
  {
    nickname: "stringcat",
    imageUrl: "/images/profile.png",
    score: 1110,
    id: 3038,
  },
  {
    nickname: "stringcat",
    imageUrl: "/images/profile.png",
    score: 1110,
    id: 3039,
  },
];

const RankingList = () => {
  return (
    <Box mt={3}>
      <Grid container spacing={1}>
        {UserList.map((item) => (
          <Grid item key={item.id} md={3}>
            <RankingItem userInfo={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RankingList;
