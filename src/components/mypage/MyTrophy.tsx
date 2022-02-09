import { Avatar, Box, Typography, useTheme } from "@mui/material";
import React from "react";
import Icon from "../Icon";

interface MyTrophyProps {
  type?: string;
  text?: string;
  achieved?: boolean;
}

const MyTrophy = ({ type = "emoji_events", text, achieved }: MyTrophyProps) => {
  const theme = useTheme();
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Avatar
        sx={{
          width: 150,
          height: 150,
          mb: 4,
          background: achieved ? theme.palette.primary.light : null,
        }}
      >
        <Icon type={type} />
      </Avatar>
      <Typography variant="body1">{text}</Typography>
    </Box>
  );
};

MyTrophy.defaultProps = {
  type: "emoji_events",
  text: "아직 비어있습니다.",
  achieved: false,
};

export default MyTrophy;
