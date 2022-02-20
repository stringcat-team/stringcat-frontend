import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

interface UserProfileProps {
  name: string;
  avatar?: string;
  userId: number;
  score: number;
  variant?: "default" | "centered";
}

const UserProfile = ({ name, avatar, userId, score, variant }: UserProfileProps) => {
  if (variant === "centered") {
    return (
      <Box display="flex" alignItems="center" mb={2} flexDirection="column">
        <Avatar src={avatar} sx={{ width: 36, height: 36, mb: 1 }} />
        <Typography sx={{ fontSize: "13px", mb: 1 }}>{name}</Typography>
        <Typography sx={{ fontSize: "13px" }}>{score}</Typography>
      </Box>
    );
  }

  return (
    <Box display="flex" alignItems="center" mb={2}>
      <Avatar src={avatar} sx={{ width: 36, height: 36 }} />
      <Box ml={1}>
        <Typography sx={{ fontSize: "13px" }}>{name}</Typography>
        <Typography sx={{ fontSize: "13px" }}>{score}</Typography>
      </Box>
    </Box>
  );
};

UserProfile.defaultProps = {
  avatar: "/images/profile.png",
  variant: "default",
};

export default UserProfile;
