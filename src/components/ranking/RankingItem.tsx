import { Box, Card, CardContent, Chip, Paper, styled, Typography } from "@mui/material";
import React, { MouseEventHandler, useCallback, useState } from "react";
import UserProfile from "../user/UserProfile";
import { UserInfo } from "../../@types/redux/reducers/user.interface";
import UserDialog from "../user/UserDialog";

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
  border: `1px solid ${theme.palette.background.default}`,
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
  const [dialog, toggleDialog] = useState<boolean>(false);
  const { id, imageUrl, score, nickname } = userInfo;

  const onToggleDialog = useCallback(() => {
    toggleDialog(!dialog);
  }, [dialog]);

  return (
    <StyledPaper onClick={onToggleDialog}>
      <UserProfile userId={id} score={score} avatar={imageUrl} name={nickname} variant="centered" />
      <Box sx={{ display: "flex", overflow: "hidden" }}>
        <StyledChip label="Javascript" />
        <StyledChip label="Typescript" />
      </Box>
      <Box p={1}>
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          Amet minim mollit non deserunt ullamco est sit
        </Typography>
      </Box>
      <UserDialog open={dialog} onToggle={onToggleDialog} />
    </StyledPaper>
  );
};

export default RankingItem;
