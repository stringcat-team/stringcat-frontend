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
import Link from "next/link";
import React from "react";
import WysiwygEditor from "./wysiwyg/WysiwygEditor";

const initialValue =
  "```javascript \nconst name = 'String Cat' \nconsole.log('Hello its String Cat') \n```";

const Hello = () => {
  const onChangeEditor = (inputValue: string) => {
    console.log(inputValue);
  };

  return (
    <Box>
      <Container sx={{ mt: 8 }}>
        <Card sx={{ width: 400, mb: 3 }}>
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

        <Paper>
          <WysiwygEditor
            onChange={onChangeEditor}
            height="600px"
            initialEditType="markdown"
            initialValue={initialValue}
            previewStyle="vertical"
          />
        </Paper>
      </Container>
    </Box>
  );
};

export default Hello;
