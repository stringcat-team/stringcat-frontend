import { ArrowBack, Home, Search } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useRef } from "react";

const Hello = () => {
  const router = useRouter();
  const onClickButton = () => {
    router.push("/login");
  };
  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
      <AppBar>
        <Toolbar>
          <Container>
            <Button onClick={onClickButton} color="secondary">
              로그인 하러가기
            </Button>
          </Container>
        </Toolbar>
      </AppBar>
      <Card>
        <CardContent>
          <Typography variant="subtitle1">subtitle : Hello it's String Cat!</Typography>
          <Typography variant="body1">body : Hello it's String Cat!</Typography>
          <Typography variant="body2">body2 : Hello it's String Cat!</Typography>
          <Typography variant="caption">caption : Hello it's String Cat!</Typography>
        </CardContent>

        <CardContent>
          <Button variant="contained">테스트</Button>
          <Button variant="contained" color="secondary">
            테스트
          </Button>
        </CardContent>

        <CardContent>
          <IconButton>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <Home />
          </IconButton>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Hello;
