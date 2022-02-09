import { Avatar, Box, Button, Container, Paper, Typography } from "@mui/material";
import React from "react";
import MyAuthority from "./MyAuthority";
import MyStacks from "./MyStacks";
import MyTrophy from "./MyTrophy";

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
          <MyStacks />
          <MyAuthority />
          <Button variant="contained" fullWidth sx={{ borderRadius: 1 }}>
            Follow
          </Button>
        </Box>
        <Box flex={1}>
          <Paper
            elevation={0}
            sx={{ mb: 1, p: 5, display: "flex", justifyContent: "space-around" }}
          >
            <MyTrophy type="approval" text="연속 출석 100일" achieved />
            <MyTrophy type="smart_toy" text="답변 100회" achieved />
            <MyTrophy type="help_center" text="질문 100회" achieved />
            <MyTrophy />
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
