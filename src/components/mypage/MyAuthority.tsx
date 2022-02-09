import { ListItem, ListItemText, Paper } from "@mui/material";
import React from "react";

interface AuthorityProps {
  authority?: {
    [key: string]: number;
    reputation: number;
    likes: number;
    dislikes: number;
    followers_count: number;
    followings_count: number;
  };
}

interface Data {
  [key: number | string]: string;
}

const data: Data = {
  reputation: "나의 평판",
  likes: "내가 받은 좋아요",
  dislikes: "내가 받은 싫어요",
  followers_count: "팔로워",
  followings_count: "팔로잉",
};

const MyAuthority = ({ authority }: AuthorityProps) => {
  return (
    <Paper sx={{ mb: 1, px: 1 }} elevation={0}>
      {authority &&
        Object.keys(data).map((key, index, array) => {
          const lastChild = index === array.length - 1;
          return (
            <ListItem divider={!lastChild} sx={{ p: 0, py: 1 }}>
              <ListItemText primary={data[key]} sx={{ m: 0 }} />
              {authority[key]}
            </ListItem>
          );
        })}
    </Paper>
  );
};

MyAuthority.defaultProps = {
  authority: {
    reputation: 1050,
    likes: 250,
    dislikes: 5,
    followers_count: 100,
    followings_count: 120,
  },
};

export default MyAuthority;
