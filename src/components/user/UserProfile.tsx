import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

interface UserProfileProps {
  name: string;
  avatar?: string;
  userId: string;
  reputation: number;
}

const UserProfile = ({ name, avatar, userId, reputation }: UserProfileProps) => {
  return (
    <Box display="flex" alignItems="center" mb={2}>
      <Avatar src={avatar} sx={{ width: 36, height: 36 }} />
      <Box ml={1}>
        <Typography sx={{ fontSize: "13px" }}>{name}</Typography>
        <Typography sx={{ fontSize: "13px" }}>{reputation}</Typography>
      </Box>
    </Box>
  );
};

UserProfile.defaultProps = {
  avatar: "/images/profile.png",
};

export default UserProfile;
