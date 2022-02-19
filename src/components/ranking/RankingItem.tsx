import { Box, Card, CardContent, Chip, Paper, styled, Typography } from "@mui/material";
import React from "react";
import UserProfile from "../user/UserProfile";
import { UserInfo } from "../../@types/redux/reducers/user.interface";

interface Props {
  userInfo: {
    id: UserInfo["id"];
    imageUrl: UserInfo["imageUrl"];
    score: UserInfo["score"];
    nickname: UserInfo["nickname"];
  };
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  paddingTop: theme.spacing(2),
  boxShadow: "none",
  "&:hover": {
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: theme.shadows[8],
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  borderRadius: 5,
  marginRight: 10,
}));

const RankingItem = ({ userInfo }: Props) => {
  const { id, imageUrl, score, nickname } = userInfo;
  return (
    <StyledPaper>
      <UserProfile userId={id} score={score} avatar={imageUrl} name={nickname} variant="centered" />
      <Box sx={{ display: "flex", overflow: "hidden" }}>
        <StyledChip label="Javascript" />
        <StyledChip label="Typescript" />
      </Box>
      <Box p={1}>
        <Typography>Amet minim mollit non deserunt ullamco est sit</Typography>
      </Box>
    </StyledPaper>
  );
};

export default RankingItem;
