import { Avatar, Box, Button, Container, Paper, Typography } from "@mui/material";
import React from "react";

const MyPage = () => {
  return (
    <Container>
      <Paper
        elevation={0}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: 392, mb: 1 }}
      >
        <Box display="flex" alignItems="center" flexDirection="column">
          <Avatar src="/images/profile.png" sx={{ width: 150, height: 150, mb: 5 }} />
          <Typography variant="h4" mb={2}>
            NickName
          </Typography>
          <Typography variant="subtitle2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do{" "}
          </Typography>
        </Box>
      </Paper>
      <Box display="flex">
        <Box sx={{ width: 234, mr: 1 }}>
          <Paper elevation={0}>기술</Paper>
          <Paper elevation={0}>a</Paper>
          <Button variant="contained" fullWidth>
            Follow
          </Button>
        </Box>
        <Box flex={1}>
          <Paper
            elevation={0}
            sx={{ mb: 1, p: 5, display: "flex", justifyContent: "space-around" }}
          >
            <Avatar sx={{ width: 150, height: 150 }}>a</Avatar>
            <Avatar sx={{ width: 150, height: 150 }}>a</Avatar>
            <Avatar sx={{ width: 150, height: 150 }}>a</Avatar>
            <Avatar sx={{ width: 150, height: 150 }}>a</Avatar>
          </Paper>
          <Paper elevation={0} sx={{ p: 2 }}>
            <Typography variant="h4">Questions</Typography>
            <Paper>a</Paper>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default MyPage;
